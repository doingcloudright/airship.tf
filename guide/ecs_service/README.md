---
sidebarDepth: 2
---

# ECS Service

<mermaid/>

## Introduction

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
