# Introduction

Airship Modules concentrate many years of AWS experience in to simple-to-use-building-blocks for Docker orchestration. Its initial goal was to have simple to use modules for every backend developer at Blinkist, the project never stopped and grew to be the modules for running an managed AWS *Docker Orchestration platform* configured by Terraform. It's simplicity has been proven to be great for Startups and for smaller independent development teams who are using Terraform already to define all parts of infrastructure.

All resources created with the Airship modules are directly supported by AWS support. By keeping ECS simple and less feature rich AWS saves on complexity compared to Kubernetes. The Control Pane is free to use, ECS Services can utilize Fargate Mode, running serverless, and it integrates directly into all existing AWS components like:

* The Docker Image Registry
* Load Balancers
* SQS
* RDS
* Cloudfront
* DynamoDB
* .. everything 

ECS matches with the ideology to use Docker Orchestration for stateless applications and to use other AWS offerings like RDS to have the least possible statefull applications running. Expenses and HR are saved by needing less in-house expertise. With a bit of help at launch, backend developers without a lot of Ops-experience can easily adept into using ECS.
## Team

The happy contributors of this project are ...

| | | |
|--  | ------------- |:-------------:|
|Maarten van der Hoef | <img src="https://github.com/maartenvanderhoef.png?size=120"> | 90% Airship, 10% Berliner |
|Jonathan Boulle| <img src="https://github.com/jonboulle.png?size=120"> | Misses nothing |
|Jamie Nelson| <img src="https://github.com/Jamie-BitFlight.png?size=120"> | ECS Shaman |
