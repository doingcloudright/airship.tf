---
sidebarDepth: 2
---

# ECS Service

<mermaid/>

## Introduction

This module will create an ECS Service within an existing ECS Cluster and takes care of connecting it to a Load Balancer if needed. It's highly configurable as there are many ways to operate an ECS Service. This Guide will go through most if not all of the configuration options the module supports. If you have questions, please join the #Airship channel on [Sweetops Slack](http://sweetops.slack.com) or create an issue [here](https://github.com/blinkist/terraform-aws-airship-ecs-service/issues)!

## Contributing

Contributors are much welcomed! If you see a bug or a lacking feature, feel free to submit a PR. Discussing your ideas first will of course help getting your PR through quicker! Please understand that the module should have as little breaking changes possible within this major release. With HCL2 ( Terraform 0.12 ) breaking changes seem to be inevitable and for this major release, refactoring with new ideas is of course much needed.

## Naming Matters

The name you choose for the ECS Service will be interpolated into different resources, for example the Application Load Balancer target groups. Certain AWS resources have a name limitation of 32 characters hence it's important to be economical with the amount of chars you allocate to the cluster name. Once a cluster has been created it's not possible to rename it, plan wisely.

## Architecture

<div class="mermaid">
graph LR
    subgraph Module Scope
    0
    end
    0[fa:fa-ban DNS Domain ecs_name.zone.tld]-->B[fa:fa-ban ALB]
    B-->C[fa:fa-ban ALB HTTP Listener]
    B-->D[fa:fa-ban ALB HTTPS Listener]
    C-->E[fa:fa-ban LB Listener Rule for ecs_name.zone.tld]
    D-->F[fa:fa-ban LB Listener Rule for ecs_name.zone.tld]
    C-->L[fa:fa-ban LB Listener Rule for custom_domains optional]
    D-->M[fa:fa-ban LB Listener Rule for custom_domains optional]
    subgraph Module Scope
    E-->G[fa:fa-ban Target Group]
    F-->G[fa:fa-ban Target Group]
    L-->G[fa:fa-ban Target Group]
    M-->G[fa:fa-ban Target Group]
    G-->H[fa:fa-ban ECS Service]
    G-->I[fa:fa-ban ECS Service]
    subgraph ECS Cluster
    subgraph ECS Service
    H[fa:fa-ban ECS Task N]
    I[fa:fa-ban ECS Task N+1]
    end
    end
    H-.->J[fa:fa-ban Task Definition:version]
    I-.->J[fa:fa-ban Task Definition:version]
    end
</div>

## Basics

```json
    container_cpu    = 256
    container_memory = 512
    container_port   = 80
    bootstrap_container_image  = "nginx:latest"

    # Initial ENV Variables for the ECS Task definition
    container_envvars  {
         SSM_ENABLED = "true"
    }
```
