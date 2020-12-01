(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{162:function(t,a,s){"use strict";s.r(a);var n=s(18),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"scaling-and-capacity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scaling-and-capacity","aria-hidden":"true"}},[t._v("#")]),t._v(" Scaling and Capacity")]),t._v(" "),s("h2",{attrs:{id:"capacity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#capacity","aria-hidden":"true"}},[t._v("#")]),t._v(" Capacity")]),t._v(" "),s("p",[t._v("The default capacity for services is defined by their min and max capacity. The min capacity defines the minimum amount of tasks the Scheduler need to keep running. The maximum capacity defines the upper limit. By default the min and max capacity is two.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("   # capacity_properties defines the size in task for the ECS Service.\n   # Without scaling enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" desired_capacity is the only necessary property\n   # With scaling enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" desired_min_capacity and desired_max_capacity define the lower and upper boundary in task size\n   capacity_properties "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      #desired_capacity     = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n      #desired_min_capacity = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n      #desired_max_capacity = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"scaling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scaling","aria-hidden":"true"}},[t._v("#")]),t._v(" Scaling")]),t._v(" "),s("p",[t._v("Autoscaling properties can be set to adjust the amount of ECS Tasks per service based on certain cloudwatch metrics. The lower and upper capacity limit defined in "),s("code",[t._v("capacity_properties")]),t._v(" stay valid.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("  # https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html\n  scaling_properties = "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type               = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CPUUtilization"')]),t._v("\n      direction          = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"up"')]),t._v("\n      evaluation_periods = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n      observation_period = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300"')]),t._v("\n      statistic          = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Average"')]),t._v("\n      threshold          = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"89"')]),t._v("\n      cooldown           = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"900"')]),t._v("\n      adjustment_type    = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ChangeInCapacity"')]),t._v("\n      scaling_adjustment = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type               = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CPUUtilization"')]),t._v("\n      direction          = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"down"')]),t._v("\n      evaluation_periods = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),t._v("\n      observation_period = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300"')]),t._v("\n      statistic          = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Average"')]),t._v("\n      threshold          = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),t._v("\n      cooldown           = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300"')]),t._v("\n      adjustment_type    = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ChangeInCapacity"')]),t._v("\n      scaling_adjustment = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-1"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])},[],!1,null,null,null);e.options.__file="scaling_capacity.md";a.default=e.exports}}]);