---
sidebarDepth: 2
---

# Fargate


## Introduction

Fargate is the Launch Type of ECS Cluster where ECS Services are running on instances managed by AWS invisible for the ECS users. With AWS taking care of the cluster instance, there is no need anymore of taking care of scaling the cluster nodes, patching and other maintenance duties.


## Terraform Implementation

The airship-ecs-cluster module can be configured to only provided resources needed for the Fargate Launch type. This way, no Autoscaling Group with EC2 instance is created with their peripheral resources. With the codeblock shown below a minimal configuration is being created which is needed for ECS Services to be able to run with the Fargate Launch Type. The configuation can still be changed at any time to be able to support both the EC2 Launch Type next to the Fargate Launch type.

```json
module "ecs" {
  source  = "blinkist/airship-ecs-cluster/aws"
  version = "0.5.0"

  name = "ecs-cluster-name"

  # create_roles defines if we create IAM Roles for EC2 instances
  create_roles                    = false
  # create_autoscalinggroup defines if we create an ASG for ECS
  create_autoscalinggroup         = false
  # ecs_instance_scaling_create     = false
}
```

::: warning
The name you choose for the ECS Cluster will be interpolated into different resources, for example the Application Load Balancer target groups. Certain AWS resources have a name limitation of 32 characters hence it's important to be economical with the amount of chars you allocate to the cluster name. Once a cluster has been created it's not possible to rename it, plan wisely.
:::
