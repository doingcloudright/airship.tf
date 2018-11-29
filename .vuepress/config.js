module.exports = {
  title : '.. ECS made easy',
  description : 'Home of Terraform Airship',
  base : '/',
  ga : 'UA-129919577-1',
  markdown : {lineNumbers : true},
  themeConfig : {
    logo : '/airship.png',
    nav : [
      {text : 'Home', link : '/'},
      {text : 'Get Started', link : '/getstarted/'},
      {text : 'Docs', link : '/docs/'},
    ],
    sidebar : {
      '/getstarted/' : [
        '',
        'preparation',
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
