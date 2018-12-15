---
sidebarDepth: 2
---

# Task IAM Role

Task IAM Roles are a mechanism similar to EC2 Instance profiles. All available AWS SDK's can authenticate to AWS through the Task IAM Role without AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.

This ECS Module automatically creates an IAM Role for the specific ECS Service. [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.htm).




