module.exports = {
    title: 'Airship Modules',
    description: 'Flexible Terraform templates help setting up your Docker Orchestration platform, resources 100% supported by Amazon',
    ga: 'UA-129919577-1',
    base: '/airship.tf/',
    markdown: {
        extendMarkdown: md => {
            md
                .use(require('markdown-it-task-lists'))
                .use(require('markdown-it-mermaid').default)
        },
    },
    themeConfig: {
        algolia: {
            apiKey: '2bba00c0d0525534a021b4f04da510bf',
            indexName: 'airship_terraform',
            algoliaOptions: {
                hitsPerPage: 10,
            },
        },
        displayAllHeaders: true,
        logo: '/airship.png',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Introduction',
                link: '/introduction/'
            },
            {
                text: 'Getting Started',
                link: '/getting_started/'
            }, {
                text: 'Guide',
                items: [{
                    text: 'Start',
                    items: [{
                            text: 'ECS Cluster',
                            link: '/guide/ecs_cluster/'
                        },
                        {
                            text: 'ECS Service',
                            link: '/guide/ecs_service/'
                        }
                    ]
                }, ]
            }
        ],
        sidebar: {
            '/getting_started/': [
                '',
                'preparation',
                'airship',
                'liftoff',
                'troubleshooting',
            ],
            '/guide/ecs_service/': [
                '',
                'deployment',
                'iam',
                'secrets_management',
                'networking',
                'load_balancing',
                'service_discovery',
                'scaling_capacity',
                'ecs_cron_tasks',
                'ec2_specific',
                'logging',
                'healthcheck',
            ],
            '/guide/ecs_cluster/': [{
                title: 'ECS Cluster',
                collapsable: false,
                children: [
                    '',
                    '/guide/ecs_cluster/fargate_launchtype',
                ],
            }, ],
        },
        repo: 'blinkist/terraform-aws-airship-ecs-service',
        editLinks: false,
    },
    plugins: [
        '@vuepress/google-analytics',
    ]
}
