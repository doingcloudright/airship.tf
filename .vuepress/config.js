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
        'gogo',
        'preparation',
      ],
      '/something_else/' : [
        '',
        'something',
      ],
    },
    repo : 'blinkist/terraform-aws-airship-ecs-service',
    editLinks : true,
  },
  plugins : {
    'sitemap' : {hostname : 'https://airship.tf'},
  }
}
