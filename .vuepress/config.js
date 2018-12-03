module.exports = {
  title : '.. ECS made easy',
  description : 'Home of Terraform Airship',
  markdown : {
    extendMarkdown : md => { md.use(require('markdown-it-task-lists')) },
  },
  themeConfig : {
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
  plugins : [
    [ '@vuepress/search', {searchMaxSuggestions : 10} ],
  ],
}
