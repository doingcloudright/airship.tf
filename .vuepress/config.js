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
      {text : 'Getting Started', link : '/getting_started/'},
      {text : 'Docs', link : '/docs/'},
    ],
    sidebar : {
      '/getting_started/' : [
        '',
        'preparation',
        'airship',
        'liftoff',
      ],
    },
    repo : 'blinkist/terraform-aws-airship-ecs-service',
    editLinks : true,
  },
  plugins : [
    [
      '@vuepress/pwa', {
        serviceWorker : true,
        updatePopup :
            {updatePopup : {message : "new content", buttonText : "refresh"}}
      }
    ],
    [ '@vuepress/search', {searchMaxSuggestions : 10} ],
  ],
}
