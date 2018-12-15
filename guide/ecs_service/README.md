---
sidebarDepth: 2
---

# ECS Service

<mermaid/>

## Introduction
The ECS Service module creates all resources related to the EC2 Service resource. The parameters of the module decide whether the module is connected to a load balancer or not, whether it uses a service registry, or if it needs scheduled tasks or if it has extra scaling needs. The goal of this module is to create a simple interface for the many possibilities AWS has to offer with ECS.

## Architecture

<div class="mermaid">
graph LR
    0[fa:fa-ban DNS Domain ecs_name.zone.tld]-->B[fa:fa-ban ALB]
    B-->C[fa:fa-ban ALB HTTP Listener]
    B-->D[fa:fa-ban ALB HTTPS Listener]
    C-->E[fa:fa-ban LB Listener Rule for ecs_name.zone.tld]
    D-->F[fa:fa-ban LB Listener Rule for ecs_name.zone.tld]
    C-->L[fa:fa-ban LB Listener Rule for custom_domains optional]
    D-->M[fa:fa-ban LB Listener Rule for custom_domains optional]
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
</div>


