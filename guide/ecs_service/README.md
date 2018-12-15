---
sidebarDepth: 2
---

# ECS Service

<mermaid/>

## Introduction

::: warning
The name you choose for the ECS Cluster will be interpolated into different resources, for example the Application Load Balancer target groups. Certain AWS resources have a name limitation of 32 characters hence it's important to be economical with the amount of chars you allocate to the cluster name. Once a cluster has been created it's not possible to rename it, plan wisely.
:::

... Intro

## Architecture

<div class="mermaid">
graph TB
    subgraph Module
    A[ECS Service]
    A-->B
    A-->C
    B[ECS Taskdefinition]
    C[Scaling]
    D[LB Handling]
    D-->A
    A---E
    E[IAM]
    F[Task Scheduler]
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
