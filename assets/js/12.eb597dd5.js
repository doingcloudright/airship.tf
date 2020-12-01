(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{191:function(e,t,a){"use strict";a.r(t);var n=a(18),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"load-balancing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balancing","aria-hidden":"true"}},[e._v("#")]),e._v(" Load balancing")]),e._v(" "),a("h2",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types","aria-hidden":"true"}},[e._v("#")]),e._v(" types")]),e._v(" "),a("p",[e._v("Through the ECS Module the ECS Service can be connected to different types of Load Balancers or no load balancer at all.")]),e._v(" "),a("p",[e._v("The parameter "),a("code",[e._v("load_balancing_type")]),e._v(" can be set to three options:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("application")]),e._v(" - Application Load Balancer")]),e._v(" "),a("li",[a("code",[e._v("network")]),e._v(" - Network Load Balancer")]),e._v(" "),a("li",[a("code",[e._v("none")]),e._v(" - No load balancer")])]),e._v(" "),a("h3",{attrs:{id:"none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#none","aria-hidden":"true"}},[e._v("#")]),e._v(" None")]),e._v(" "),a("p",[e._v("When set to "),a("code",[e._v("none")]),e._v(" the ECS Service is not connected to a load balancer and will most likely function as a type of worker. Without a load balancer checking health check URL's the process is only marked unhealthy the moment the process is killed or when the docker "),a("code",[e._v("HEALTHCHECK")]),e._v(" is failing.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("module "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"demo_web"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  ..\n  load_balancing_type = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"none"')]),e._v("\n  ..\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("mermaid"),e._v(" "),a("h3",{attrs:{id:"application-lb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-lb","aria-hidden":"true"}},[e._v("#")]),e._v(" Application LB")]),e._v(" "),a("p",[e._v("The Appication Load Balancer ( ALB ) can forward traffic of multiple domain names to different ECS Services by creating so called "),a("a",{attrs:{href:"https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("lb_listener_rules"),a("OutboundLink")],1),e._v(". This module can create listener rules on both the HTTP as the HTTPS listener. Based on the "),a("code",[e._v("host-header")]),e._v(" ALB traffic will be forwarded to the right ECS Service. The Application Load Balancer is not transparent and traffic needs to be allowed. See "),a("router-link",{attrs:{to:"/guide/ecs_service/#ecs-service-networking"}},[e._v("ECS Service networking")]),e._v(" for more information.")],1),e._v(" "),a("p",[e._v("As many services can be connected to a single Applicaation Load Balancer, the load b")]),e._v(" "),a("p",[e._v("By default the Module will create a record in the given "),a("code",[e._v("route53_zone_id")]),e._v(" with the value of the name of the service, e.g. <ecs_name>.zone.tld. The parameter "),a("code",[e._v("route53_record_type")]),e._v(" can be set to either "),a("code",[e._v("NONE")]),e._v(", "),a("code",[e._v("ALIAS")]),e._v(" or "),a("code",[e._v("CNAME")]),e._v(". In case "),a("code",[e._v("NONE")]),e._v(" is given, no record will be made inside the Route53 Zone. "),a("code",[e._v("ALIAS")]),e._v(" has as advantage that multiple records with the same name can be made, this can help a migration to a different service at a later stage.")]),e._v(" "),a("p",[e._v("For every host inside the module parameter "),a("code",[e._v("custom_listen_hosts")]),e._v(" this module will create a listener rule pointing to your ECS Service. With the code snippet in mind of below, and if www.example.com is pointed to the ALB, traffic with www.example.com as host header will be be forwarded to the running ECS tasks of the service.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("module "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"demo_web"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  ..\n  ..\n  name = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"airship-web"')]),e._v("\n  ..\n  # load_balancing_enabled sets if a load balancer will be attached to the ecs service / target group\n  load_balancing_type = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"application"')]),e._v("\n  # The ARN of the ALB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" when left-out the service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" will not be attached to a load-balance\n  load_balancing_properties_lb_arn                = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${module.alb_shared_services_ext.load_balancer_id}"')]),e._v("\n  # https listener ARN\n  load_balancing_properties_lb_listener_arn_https = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${element(module.alb_shared_services_ext.https_listener_arns,0)}"')]),e._v("\n  # http listener ARN\n  load_balancing_properties_lb_listener_arn       = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${element(module.alb_shared_services_ext.http_tcp_listener_arns,0)}"')]),e._v("\n  load_balancing_properties\n  # The VPC_ID the target_group is being created in\n  load_balancing_properties_lb_vpc_id             = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${module.vpc.vpc_id}"')]),e._v("\n  # The route53 zone for which we create a subdomain\n  load_balancing_properties_route53_zone_id       = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${aws_route53_zone.shared_ext_services_domain.zone_id}"')]),e._v("\n\n  # After which threshold in health check is the task marked as unhealthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" defaults to "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n  load_balancing_properties_unhealthy_threshold   = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3"')]),e._v("\n\n  # load_balancing_properties_unhealthy_threshold_health_uri defines which health-check uri the target group needs to check on for health_check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" defaults to /ping\n  # load_balancing_properties_unhealthy_threshold_health_uri = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/ping"')]),e._v("\n\n  # The amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("-"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3600")]),e._v(" seconds.\n  load_balancing_properties_deregistration_delay = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"10"')]),e._v("\n\n  custom_listen_hosts    = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"www.example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n")])])]),a("p",[e._v("This sample would create ...")]),e._v(" "),a("div",{staticClass:"mermaid"},[e._v("\ngraph LR\n    subgraph Module Scope\n    0\n    end\n    0[fa:fa-ban DNS Domain ecs_name.zone.tld]--\x3eB[fa:fa-ban ALB]\n    B--\x3eC[fa:fa-ban ALB HTTP Listener]\n    B--\x3eD[fa:fa-ban ALB HTTPS Listener]\n    C--\x3eE[fa:fa-ban LB Listener Rule for ecs_name.zone.tld]\n    D--\x3eF[fa:fa-ban LB Listener Rule for ecs_name.zone.tld]\n    C--\x3eL[fa:fa-ban LB Listener Rule for custom_domains optional]\n    D--\x3eM[fa:fa-ban LB Listener Rule for custom_domains optional]\n    subgraph Module Scope\n    E--\x3eG[fa:fa-ban Target Group]\n    F--\x3eG[fa:fa-ban Target Group]\n    L--\x3eG[fa:fa-ban Target Group]\n    M--\x3eG[fa:fa-ban Target Group]\n    G--\x3eH[fa:fa-ban ECS Service]\n    G--\x3eI[fa:fa-ban ECS Service]\n    subgraph ECS Cluster\n    subgraph ECS Service\n    H[fa:fa-ban ECS Task N]\n    I[fa:fa-ban ECS Task N+1]\n    end\n    end\n    H-.->J[fa:fa-ban Task Definition:version]\n    I-.->J[fa:fa-ban Task Definition:version]\n    end\n")]),e._v(" "),a("h3",{attrs:{id:"application-lb-https-redirect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-lb-https-redirect","aria-hidden":"true"}},[e._v("#")]),e._v(" Application LB HTTPS Redirect")]),e._v(" "),a("p",[e._v("The ECS Module can also redirect HTTP traffic to HTTPS using "),a("a",{attrs:{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#redirect-actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALB Listener Rule - Redirect actions"),a("OutboundLink")],1),e._v(". Setting load_balancing_properties "),a("code",[e._v("redirect_http_to_https")]),e._v(" to true will create LB Listener rules for the HTTP listener which won't forward traffic to the ECS Service but redirect the HTTP client to HTTPS.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("module "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"demo_web"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  ..\n  ..\n  name = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"airship-web"')]),e._v("\n  ..\n  # load_balancing_enabled sets if a load balancer will be attached to the ecs service / target group\n  load_balancing_type = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"application"')]),e._v("\n  load_balancing_properties "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    # The ARN of the ALB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" when left-out the service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" will not be attached to a load-balance\n    load_balancing_properties_lb_arn                = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${module.alb_shared_services_ext.load_balancer_id}"')]),e._v("\n    # https listener ARN\n    load_balancing_properties_lb_listener_arn_https = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${element(module.alb_shared_services_ext.https_listener_arns,0)}"')]),e._v("\n  \n    # The VPC_ID the target_group is being created in\n    load_balancing_properties_lb_vpc_id             = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${module.vpc.vpc_id}"')]),e._v("\n  \n    # The route53 zone for which we create a subdomain\n    load_balancing_properties_route53_zone_id       = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${aws_route53_zone.shared_ext_services_domain.zone_id}"')]),e._v("\n\n    load_balancing_properties_redirect_http_to_https = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  ..\n  ..\n")])])]),a("h3",{attrs:{id:"application-lb-cognito-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-lb-cognito-authentication","aria-hidden":"true"}},[e._v("#")]),e._v(" Application LB Cognito Authentication")]),e._v(" "),a("p",[e._v("Cognito provides an easy way to add authentication to any of your HTTP endpoints. A simple user pool can be created in Cognito which can be used to authenticate your users with. The following codeblock is a sample on how to create a cognito user pool.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("resource "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"aws_cognito_user_pool"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"main"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  name = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"testpool"')]),e._v("\n\n  auto_verified_attributes = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"email"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n  password_policy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    minimum_length    = "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("\n    require_lowercase = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n    require_uppercase = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n    require_numbers   = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n    require_symbols   = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n  admin_create_user_config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    allow_admin_create_user_only = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    unused_account_validity_days = "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("\n\n    invite_message_template "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      email_message = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Your username is {username} and temporary password is {####}. "')]),e._v("\n      email_subject = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Your temporary password"')]),e._v("\n      sms_message   = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Your username is {username} and temporary password is {####}. "')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n  verification_message_template "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    default_email_option = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CONFIRM_WITH_LINK"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\nresource "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"aws_cognito_user_pool_domain"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pool"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  domain       = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"testdomain"')]),e._v("\n  user_pool_id = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${aws_cognito_user_pool.main.id}"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\nresource "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"aws_cognito_user_pool_client"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"client"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  name                                 = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tfAWS"')]),e._v("\n  generate_secret                      = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),e._v("\n  supported_identity_providers         = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"COGNITO"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  allowed_oauth_flows_user_pool_client = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n  allowed_oauth_flows                  = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  callback_urls                        = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://domain_of_your_http_endpoint/oauth2/idpresponse"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n  allowed_oauth_scopes = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"email"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"openid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"profile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"aws.cognito.signin.user.admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n  user_pool_id = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${aws_cognito_user_pool.main.id}"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])]),a("p",[e._v("After you have created the userpool, you can add a user like this. In this example, only Administrators can create new users.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/cognito_create_user.png"),alt:"create cognito user"}}),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Before the ECS Module can user the cognito user pool it needs to be applied with Terraform first.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("cognito_*")]),e._v(" params take care of changing the ALB Listener to make sure the only authenticated users can visit the content. As cognito can only be applied to the https listener it's important to enable "),a("code",[e._v("redirect_http_to_https")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("module "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"demo_web"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  ..\n  ..\n  name = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"airship-web"')]),e._v("\n  ..\n  # load_balancing_enabled sets if a load balancer will be attached to the ecs service / target group\n  load_balancing_type = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"application"')]),e._v("\n  # The ARN of the ALB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" when left-out the service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" will not be attached to a load-balance\n  load_balancing_properties_lb_arn                = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${module.alb_shared_services_ext.load_balancer_id}"')]),e._v("\n  \n  # https listener ARN\n  load_balancing_properties_lb_listener_arn_https = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${element(module.alb_shared_services_ext.https_listener_arns,0)}"')]),e._v("\n  \n  # http listener ARN\n  load_balancing_properties_lb_listener_arn       = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${element(module.alb_shared_services_ext.http_tcp_listener_arns,0)}"')]),e._v("\n  \n  # The VPC_ID the target_group is being created in\n  load_balancing_properties_lb_vpc_id             = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${module.vpc.vpc_id}"')]),e._v("\n  \n  # The route53 zone for which we create a subdomain\n  load_balancing_properties_route53_zone_id       = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${aws_route53_zone.shared_ext_services_domain.zone_id}"')]),e._v("\n\n  load_balancing_properties_redirect_http_to_https = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n\n  # cognito_auth_enabled is set when cognito authentication is used for the https listener\n  Important to have redirect_http_to_https set to "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v(" as http authentication is only added to the https listener\n\n  load_balancing_properties_cognito_auth_enabled = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n\n  ## cognito_user_pool_arn defines the cognito user pool arn for the added cognito authentication\n  load_balancing_properties_cognito_user_pool_arn = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${aws_cognito_user_pool.main.arn}"')]),e._v("\n\n  # cognito_user_pool_client_id defines the cognito_user_pool_client_id\n  load_balancing_properties_cognito_user_pool_client_id = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${aws_cognito_user_pool_client.client.id}"')]),e._v("\n\n  # cognito_user_pool_domain sets the domain of the cognito_user_pool\n  load_balancing_properties_cognito_user_pool_domain = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${aws_cognito_user_pool_domain.pool.id}"')]),e._v("\n  ..\n  ..\n")])])]),a("h3",{attrs:{id:"network-lb-nlb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-lb-nlb","aria-hidden":"true"}},[e._v("#")]),e._v(" Network LB ( NLB )")]),e._v(" "),a("p",[e._v("The Network Load Balancer (NLB) forwards TCP Traffic transparently to the ECS Tasks of an ECS Service. For an existing NLB the ECS Module creates a new NLB-Listener with a new LB Target Group as default. By default the listener port is set to port 80. It's not mandatory to use the NLB togeter with awsvpc network mode.")]),e._v(" "),a("div",{staticClass:"mermaid"},[e._v("\ngraph LR\n    subgraph Module Scope\n    0\n    end\n    0[fa:fa-ban DNS Domain ecs_name.zone.tld]--\x3eB[fa:fa-ban NLB]\n    B--\x3eC[fa:fa-ban NLB Listener]\n    subgraph Module Scope\n    C--\x3eD[fa:fa-ban Target Group]\n    D--\x3eH[fa:fa-ban ECS Task N]\n    D--\x3eI[fa:fa-ban ECS Task N+1]\n    subgraph ECS Cluster\n    subgraph ECS Service\n    H\n    I\n    end\n    end\n    H-.->J[fa:fa-ban Task Definition:version]\n    I-.->J[fa:fa-ban Task Definition:version]\n    end\n")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("module "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"demo_web"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    ..\n    ..\n    awsvpc_enabled = "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    awsvpc_subnets            = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${module.vpc.private_subnets}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    awsvpc_security_group_ids = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${module.demo_sg.this_security_group_id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n\n    load_balancing_type = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"network"')]),e._v("\n    load_balancing_properties_lb_arn                = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${module.nlb.load_balancer_id}"')]),e._v("\n    load_balancing_properties_lb_vpc_id             = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${module.vpc.vpc_id}"')]),e._v("\n    load_balancing_properties_route53_zone_id       = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${aws_route53_zone.shared_ext_services_domain.zone_id}"')]),e._v("\n    # load_balancing_properties_unhealthy_threshold   = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3"')]),e._v("\n    # load_balancing_properties_nlb_listener_port sets the port of the lb_listener\n    # load_balancing_properties_nlb_listener_port = "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n    ..\n    ..\n")])])])],1)},[],!1,null,null,null);s.options.__file="load_balancing.md";t.default=s.exports}}]);