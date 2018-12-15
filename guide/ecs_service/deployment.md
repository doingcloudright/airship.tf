---
sidebarDepth: 2
---

# Deployment 

<mermaid/>

When using the module for the first time, a Task Definition is created envelopes a container definition. This container definition defines the docker image, cpu and memory capacity, environment variables and other params defined inside the submodule : ecs_container_definition. The idealogy behind the module is that after deployment of the service, a third-party deployment mechanism, for example Jenkins, takes care of creating new Task definitions with updated Docker images. A few popular tools for this are:
 
* [ECS Deploy](https://github.com/silinternational/ecs-deploy)
* [AWS Codepipeline](https://aws.amazon.com/codepipeline/)
* [Deploy fish](https://github.com/caltechads/deployfish)

These deployment tools create a new Task Definition, by copying the current Task Definition in use and replacing the image with what is given as parameter. After creation of the new Task Definition, the ECS Service task definition attribute will be set to the newly created ECS Task definition. ECS takes care of the deployment without downtime, this can either be configured as rolling or something similar to a green/blue deployment.

As updates happen outside of the Terraform State a so called drift takes place. The ECS Service in Terraform is still pointing to an older version of the Task definition. The ECS Module takes care of that by looking up the current active ECS Task definition. It grabs the running image from the live container definition and it creates a new Task Definition with the updated image. If there are no changes between the live task definition and the newly created one. The ECS Service will keep pointing to the live definition and no actual update takes place.

*A diagram of the interaction between the submodules with the ECS Service Module.*

<div class="mermaid">
sequenceDiagram
    ECS Module->>live_task_lookup: Retrieve image of running ECS Task
    live_task_lookup->>live_task_lookup: Invoke lambda to check for current live task
    live_task_lookup-->>ECS Module: live_image
    ECS Module->>ecs_container_definition: create container def with live image or parameter image
    ecs_container_definition-->>ECS Module: return container definition
    ECS Module->>ecs_task_definition: create task definition with new container definition
    ecs_task_definition-->>ECS Module:task version
    ECS Module->>ecs_task_definition_selector: return the live task definition when no change has been made
    ecs_task_definition_selector-->>ECS Module: live or new task definition version
    ECS Module->>ecs_service: Update Service with given task definition version
</div>

## IAM Role for deployment

.. INFO

::: warning
The name you choose for the ECS Cluster will be interpolated into different resources, for example the Application Load Balancer target groups. Certain AWS resources have a name limitation of 32 characters hence it's important to be economical with the amount of chars you allocate to the cluster name. Once a cluster has been created it's not possible to rename it, plan wisely.
:::
