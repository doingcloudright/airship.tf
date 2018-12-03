module.exports = {
  title : '.. ECS made easy',
  description : 'Home of Terraform Airship',
  ga : 'UA-129919577-1',
  markdown : {
    extendMarkdown : md => { md.use(require('markdown-it-task-lists')) },
  },
  themeConfig : {
    algolia : {
      apiKey : '2bba00c0d0525534a021b4f04da510bf',
      indexName : 'airship_terraform',
      algoliaOptions : {
        hitsPerPage : 10,
      },
    },
    displayAllHeaders : true,
    logo : '/airship.png',
    nav : [
      {text : 'Home', link : '/'},
      {text : 'Introduction', link : '/introduction/'},
      {text : 'Getting Started', link : '/getting_started/'}, {
        text : 'Guide',
        items : [
          {text : 'Examples', link : '/'},
          {
            text : 'Start',
            items : [
              {text : 'ECS Cluster', link : '/guide/ecs_cluster/'},
              {text : 'ECS Service', link : '/guide/ecs_service/'}
            ]
          },
        ]
      }
    ],
    sidebar : {
      '/getting_started/' : [
        '',
        'preparation',
        'airship',
        'liftoff',
      ],
      '/guide/' : [
        '',
      ],
      '/guide/ecs_cluster/' : [
        {
          title : 'ECS Cluster',
          collapasble : false,
          children : [ '' ],
        },
      ],
    },
    repo : 'blinkist/terraform-aws-airship-ecs-service',
    editLinks : true,
  },
}
