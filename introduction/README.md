# Introduction


::: warning
Test Content
:::

Two years ago ..

## Terraform

Hashicorp Terraform has established itself as the cross-cloud Infrastructure Definition language. With its support for multiple providers and cloud-related parties it allows teams to completely define their stack with Terraform. Terraform Modules act as templates for building blocks of infrastructure and can be shared through the open source market place [Terraform Module Registry](http://registry.terraform.io).


## ECS

[ECS](https://aws.amazon.com/blogs/aws/cloud-container-management/) is AWS's original offering for Docker Orchestration. Although less feature rich than Kubernetes (EKS), it has proved to be an extremely stable platform for hosting stateless Docker services. Unlike EKS, Terraform can completely manage the service, and its interaction and access to other AWS components like Load Balancers, fine grained security access to RDS, and other components which are dependent of IAM Policies.

## Airship

The Airship project started to be able to allow non-devops-developers at [Blinkist](http://www.blinkist.com/), to simply roll out their own services using Terraform. The module would automatically made the service available to other services and the public by connecting the service to an Application Load balancer and to create the Route53 record with it. As ECS grew the module grew with it and added functionality many regular Docker services would have. j
