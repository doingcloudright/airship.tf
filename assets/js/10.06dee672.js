(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{189:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"health-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#health-checks","aria-hidden":"true"}},[e._v("#")]),e._v(" Health Checks")]),e._v(" "),a("p",[e._v("The AWS / ECS ecosystem has a few ways of discovering if a task is healthy or not.")]),e._v(" "),a("h2",{attrs:{id:"process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process","aria-hidden":"true"}},[e._v("#")]),e._v(" Process")]),e._v(" "),a("p",[e._v("The most basic health check is if the docker process is running. The moment the process of a docker dies the task is marked as unhealthy.")]),e._v(" "),a("h2",{attrs:{id:"load-balancer-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer-checks","aria-hidden":"true"}},[e._v("#")]),e._v(" Load Balancer Checks")]),e._v(" "),a("p",[e._v("In case of ALB the "),a("code",[e._v("health_uri")]),e._v(" defines which URI the Application Load Balancer requests from the ECS Task. The task is marked healthy as long as a HTTP 200 OK is returned. In case it does not "),a("code",[e._v("unhealthy_threshold")]),e._v(" sets the amount of errored requests before the task is marked unhealthy.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("      .. \n      .. \n      # After which threshold in health check is the task marked as unhealthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" defaults to "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n      # load_balancing_properties_unhealthy_threshold   = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3"')]),e._v("\n  \n      # load_balancing_properties_health_uri defines which health-check uri the target group needs to check on for health_check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" defaults to /ping\n      # load_balancing_properties_health_uri = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/ping"')]),e._v("\n  \n      # The amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("-"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3600")]),e._v(" seconds.\n      load_balancing_properties_deregistration_delay = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"10"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"docker-healthcheck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-healthcheck","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Healthcheck")]),e._v(" "),a("p",[e._v("Docker provides a "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#healthcheck",target:"_blank",rel:"noopener noreferrer"}},[e._v("HEALTHCHECK"),a("OutboundLink")],1),e._v(" directive to use from within docker. Without using the Dockerfile directive, the ECS Module has a parameter "),a("code",[e._v("container_healthcheck")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("  container_healthcheck = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    command     = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CMD-SHELL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"curl http://localhost:port/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    interval    = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"10"')]),e._v("\n    startperiod = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"120"')]),e._v("\n    retries     = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3"')]),e._v("\n    timeout     = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"5"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("All vars of the container_healthcheck map need to be filled or ECS will keep updating the Task Definition.")])])])},[],!1,null,null,null);r.options.__file="healthcheck.md";t.default=r.exports}}]);