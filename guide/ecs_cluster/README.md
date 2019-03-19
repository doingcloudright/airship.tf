---
sidebarDepth: 2
---

# ECS Cluster

## Introduction

The ECS Cluster is an AWS managed docker container scheduler. The scheduler manages how ECS Services and ECS Tasks are working on either AWS Managed Infrastructure (Fargate) or on EC2 instances. To have ECS Services running on EC2 Instances, EC2 Instances need to be prepared with an ECS Agent, a service which communicates with the ECS Scheduler.

In every region AWS Provides with specific Amazon Linux AMI's made for running ECS. These Images need little bootstrap user-data to become configured as ECS Instance. To make sure the EC2 Instances belonging to an ECS Cluster are fault-tolerant and to give them the ability to scale the EC2 Instances are part of an Autoscaling Group. 

An EC2 Instance Profile together with an IAM role for the ECS-Agent make sure the ECS Agent has the permissions to communicate with the ECS Scheduler and to receive be able to get an ecr GetAuthorizationToken to be able to pull images from ECR Repositories.


## Launch Types

On page [link] we discuss the settings for the Fargate Launch type, the page will focus on running ECS Services on top EC2 instances. It's important to know that the ECS Cluster Module is always configured for the Fargate Launch type either way. This pages will discuss the configuration for having EC2 Intances as ECS Backend.

## Terraform Implementation

::: warning
The name you choose for the ECS Cluster will be interpolated into different resources, for example the Application Load Balancer target groups. Certain AWS resources have a name limitation of 32 characters hence it's important to be economical with the amount of chars you allocate to the cluster name. Once a cluster has been created it's not possible to rename it, plan wisely.
:::

### VPC

For EC2 Instances to operate properly we need a VPC and a few other things. Make sure to adjust the values according to your region and capacity wishes.

```json
# VPC Definition
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "1.46.0"

  name = "ecs-vpc"
  cidr = "10.50.0.0/16"

  azs             = ["eu-central-1a", "eu-central-1b"]
  public_subnets  = ["10.50.11.0/24", "10.50.12.0/24"]
  private_subnets = ["10.50.21.0/24", "10.50.22.0/24"]

  single_nat_gateway = true

  enable_nat_gateway   = true
  enable_vpn_gateway   = false
  enable_dns_hostnames = true

  tags = {
    Terraform   = "true"
  }
}
```

### Security Groups

ECS will have network components just like EC2, in this example we need create a security group for the load balancer, a security group for the ECS Cluster nodes. With dynamic port mapping the ECS Docker containers have ports allocated at the EC2 instance in a range 32768-65535.

```json
resource "aws_security_group" "lb_sg" {
  name        = "load-balancer-sg"
  description = "Allow all inbound traffic to http and https"
  vpc_id      = "${module.vpc.vpc_id}"

  ingress {
    from_port    = 80
    to_port      = 80
    protocol     = "tcp"
    cidr_blocks  = ["0.0.0.0/0"]
  }

  ingress {
    from_port    = 443
    to_port      = 443
    protocol     = "tcp"
    cidr_blocks  = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags {
    Name = "load-balancer-sg"
  }
}
```

The security group `ecs-instances-sg` only allows incoming traffic on 32768-65535 coming from the Load Balancer security group and has no restrictions outgoing.

```json
resource "aws_security_group" "ecs_instances_sg" {
  name        = "ecs-instances-sg"
  description = "Allow all inbound traffic to dyamic ports"
  vpc_id      = "${module.vpc.vpc_id}"

  ingress {
    from_port       = 32768
    to_port         = 65535
    protocol        = "tcp"
    security_groups = ["${aws_security_group.lb_sg.id}"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags {
    Name = "ecs-instances-sg"
  }
}
```
### ECS Cluster Module

The following code block creates an ECS Cluster with an Autoscaling Group (ASG) and its instances in the designated VPC and subnets. The instances will automatically be assigned with the given security groups ids. For security hardening purposes the EC2 metadata service can be blocked of by setting block_metadata_service to true.

By default the module sets `user_data` for the launch configuration of the ASG to make sure the instances bootstrap in a certain way. Part of the userdata is the configuration of /etc/ecs/ecs.config which is the config file of the ECS Agent. By setting `ec2_custom_userdata` with bash formatted script you can extend the bootprocess, for example, adding users and their public keys.

```json
module "ecs_web" {
  source  = "blinkist/airship-ecs-cluster/aws"
  version = "0.5.1"

  # name is re-used as a unique identifier for the creation of different resources
  name            = "NAME"

  vpc_id          = "${module.vpc.vpc_id}"
  subnet_ids      = ["${module.vpc.private_subnets}"]

  cluster_properties {
    # ec2_key_name defines the keypair
    ec2_key_name = "${aws_key_pair.main.key_name}"
    # ec2_instance_type defines the instance type
    ec2_instance_type = "t2.small"
    # ec2_custom_userdata sets the launch configuration userdata for the EC2 instances
    ec2_custom_userdata = ""
    # ec2_asg_min defines the minimum size of the autoscaling group
    ec2_asg_min = "2"
    # ec2_asg_max defines the maximum size of the autoscaling group
    ec2_asg_max = "4"
    # ec2_disk_size defines the size in GB of the non-root volume of the EC2 Instance
    ec2_disk_size = "100"
    # ec2_disk_type defines the disktype of that EBS Volume
    ec2_disk_type = "gp2"
    # ec2_disk_encryption = "true"

    # block_metadata_service blocks the aws metadata service from the ECS Tasks true / false, this is preferred security wise
    block_metadata_service = true
  }

  # vpc_security_group_ids defines the security groups for the ec2 instances.
  vpc_security_group_ids = ["${module.ecs_instances_sg.this_security_group_id}"]


  tags = {
	Environment = "Development"
  }
}
```



### ECS Cluster Scaling

To configure the autoscaling group to scale up and down a few measures need to be taken. ECS Services which run inside the ECS Cluster need to be stopped and moved to other EC2 Nodes the moment the ECS Cluster is scaling down. A lambda function discussed in [This AWS Blog Article](https://aws.amazon.com/blogs/compute/how-to-automate-container-instance-draining-in-amazon-ecs/) describes how that works. That Lambda has been made into a Terraform Module and can be used by different ECS Clusters in the same account.


```json
module "ecs_draining {
  source  = "blinkist/airship-ecs-instance-draining/aws"
  version = "0.1.0"
  name    = "drain"
}
```

::: warning
It's important to create apply this module before refering to it in the ecs cluster module.
:::

After applying the instance draining module, `ecs_instance_scaling_create` can be set to true and the module can refer to the `ecs_instance_draining_lambda_arn`. The parameter: `ecs_instance_scaling_properties` configures a list with maps with the scaling movements.

https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html

```json
module "ecs_web" {
  ..
  ..
  ..
  # ecs_instance_scaling_create needs to be true
  ecs_instance_scaling_create = true

  # The lambda function which takes care of draining the ecs instance
  ecs_instance_draining_lambda_arn = "${module.ecs_draining.lambda_function_arn}"

  # ecs_instance_scaling_properties defines how the ECS Cluster scales up / down
  ecs_instance_scaling_properties = [
   {
     type = "MemoryReservation"
     direction = "up"
     evaluation_periods = 2
     observation_period = "300"
     statistic = "Average"
     threshold = "50"
     cooldown = "900"
     adjustment_type = "ChangeInCapacity"
     scaling_adjustment = "1"
   },
   {
     type = "MemoryReservation"
     direction = "down"
     evaluation_periods = 4
     observation_period = "300"
     statistic = "Average"
     threshold = "10"
     cooldown = "300"
     adjustment_type = "ChangeInCapacity"
     scaling_adjustment = "-1"
   },
  ]
  ..
  ..
  ..
}
```
