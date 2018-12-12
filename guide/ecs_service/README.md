---
sidebarDepth: 2
---
<mermaid/>

# ECS Service

## Introduction
The ECS Service module defines all resources needed for a running a Docker container inside ECS. The parameters of the module decide whether the module is connected to a load balancer or not, whether it uses a service registry, or if it needs scheduled tasks or if it has extra scaling needs. The goal of this module is to create a simple interface for the many possibilities AWS has to offer with ECS.

## Architecture
Setup :
[ Picture here ]

## ECS Service networking

A differentation needs to be made between two different types of ECS Services and their Task Definitions. ECS Task definitinions have two so-called network-modes.

* bridge
    - Bridge is only used for ECS Service which are run on top of EC2 Instances which joined the ECS Cluster. The service do not have their own Network Interface and will
    inherit the Networking of their Docker Host. As different different tasks cannot allocate the same port on the docker host, ECS uses [Dynamic Port Mapping](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PortMapping.html), which allocated ports in the ephemeral port range from 49153 through 65535. The Security Group of the EC2 Instance needs to allow traffic from the Load Balancer to these ports.

* awsvpc
    - awsvpc network-mode is mandatory on Fargate and optional on EC2. The ECS Task will have its own ENI and will also have its own Security Group. The `container_port` parameter will also be used to expose the port on its network interface. A security group rule would need to allow traffic to this port. Using awsvpc with EC2 ECS is limited as the amount of available network interfaces per EC2 instance is extremely limited. [This](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI) table shows the amount of ENI's available per instance type.

::: tip
For both network modes the security groups need to allow outgoing traffic to communicate with AWS, for example to pull ECR Docker images.
:::

::: warning Warning for Network Load Balancer (NLB) Users!
A NLB acts transparantly and does not have a Security Group, this implies that ECS Services which need to allow traffic from a NLB need a wide open security group rule in case it needs to be reachable from the internet. It's advised to use awsvpc network mode for this as the service will have it's own Security Group then.
:::

## ECS Service Load Balancing

The ECS Module can automatically modify existing load balancer properties to forward traffic to the ECS Service. The parameter `load_balancing_type` can be set to three options:
* `application` - Application Load Balancer
* `network` - Network Load Balancer
* `none` - No load balancer

### None

When set to `none` the ECS Service is not connected to a load balancer and will most likely function as a type of worker. Without a load balancer checking health check URL's the process is only marked unhealthy the moment the process is killed or when the docker `HEALTHCHECK` is failing.

### Application Load Balancer ( ALB )

The ALB can forward traffic of multiple domain names to different ECS Services by creating so called [lb_listener_rules](https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html). This module can create listener rules on both the HTTP as the HTTPS listener. Based on the `host-header` ALB traffic will be forwarded to the right ECS Service. The Application Load Balancer is not transparent and traffic needs to be allowed. See [ECS Service networking](/guide/ecs_service/#ecs-service-networking) for more information.

By default the Module will create a record in the given `route53_zone_id` with the value of the name of the service, e.g. &lt;ecs_name&gt;.zone.tld. By default the type of record is create

<div class="mermaid">
graph LR
    0[fa:fa-ban DNS Domain ecs_name.zone.tld]-->B[fa:fa-ban ALB]
    B-->C[fa:fa-ban ALB HTTP Listener]
    B-->D[fa:fa-ban ALB HTTPS Listener]
    C-->E[fa:fa-ban LB Listener Rule for ecs_name.zone.tld]
    D-->F[fa:fa-ban LB Listener Rule for ecs_name.zone.tld]
    C-->L[fa:fa-ban LB Listener Rule for custom_domains optional]
    D-->M[fa:fa-ban LB Listener Rule for custom_domains optional]
    E-->G[fa:fa-ban ECS Service]
    F-->G[fa:fa-ban ECS Service]
    L-->G[fa:fa-ban ECS Service]
    M-->G[fa:fa-ban ECS Service]
</div>

### Network Load Balancer ( NLB )

The following code block is an excerpt of the full ECS Module to 

```
# load_balancing_enabled sets if a load balancer will be attached to the ecs service / target group
load_balancing_type = "application"
load_balancing_properties {
  # The default route53 record type, can be CNAME, ALIAS or NONE
  # route53_record_type = "ALIAS"

  # Unique identifier for the weighted IN A Alias Record
  # route53_a_record_identifier = "identifier"

  # The ARN of the ALB, when left-out the service, will not be attached to a load-balance
  lb_arn                = "${module.alb_shared_services_ext.load_balancer_id}"
  # https listener ARN
  lb_listener_arn_https = "${element(module.alb_shared_services_ext.https_listener_arns,0)}"

  # http listener ARN
  lb_listener_arn       = "${element(module.alb_shared_services_ext.http_tcp_listener_arns,0)}"

  # The VPC_ID the target_group is being created in
  lb_vpc_id             = "${module.vpc.vpc_id}"

  # The route53 zone for which we create a subdomain
  route53_zone_id       = "${aws_route53_zone.shared_ext_services_domain.zone_id}"

  # After which threshold in health check is the task marked as unhealthy, defaults to 3
  # unhealthy_threshold   = "3"

  # health_uri defines which health-check uri the target group needs to check on for health_check, defaults to /ping
  # health_uri = "/ping"

  # The amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds.
  # deregistration_delay = "300"

  # Creates a listener rule which redirects to https
  # redirect_http_to_https = false
}
```




The ECS modules 

### Network Load Balancer



<center>§§</center>

## ECS Task definitions, Bootstrap, Deployment and State-drift

When using the module for the first time, a Task Definition is created envelopes a container definition. This container definition defines the docker image, cpu and memory capacity, environment variables and other params defined inside the submodule : ecs_container_definition. The idealogy behind the module is that after deployment of the service, a third-party deployment mechanism, for example Jenkins, takes care of creating new Task definitions with updated Docker images. A few popular tools for this are:
 
* https://github.com/silinternational/ecs-deploy
* SOMETHING 

These deployment tools create a new Task Definition, by copying the current Task Definition in use and replacing the image with what is given as parameter. After creation of the new Task Definition, the ECS Service task definition attribute will be set to the newly created ECS Task definition. ECS takes care of the deployment without downtime, this can either be configured as rolling or something similar to a green/blue deployment.

As updates happen outside of the Terraform State a so called drift takes place. The ECS Service in Terraform is still pointing to an older version of the Task definition. The ECS Module takes care of that by looking up the current active ECS Task definition. It grabs the running image from the live container definition and it creates a new Task Definition with the updated image. If there are no changes between the live task definition and the newly created one. The ECS Service will keep pointing to the live definition and no actual update takes place.

FLOW IMAGE HERE

<center>§§</center>

## Terraform Implementation

::: warning
The name you choose for the ECS Cluster will be interpolated into different resources, for example the Application Load Balancer target groups. Certain AWS resources have a name limitation of 32 characters hence it's important to be economical with the amount of chars you allocate to the cluster name. Once a cluster has been created it's not possible to rename it, plan wisely.
:::
