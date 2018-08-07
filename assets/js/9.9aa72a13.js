(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{212:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"scenes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenes","aria-hidden":"true"}},[t._v("#")]),t._v(" Scenes")]),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),a("p",[t._v("Here we'll create some scenes (day, night, at home, away) to simulate how our app controls the devices. We'll learn how to interact with a circular slider of "),a("code",[t._v("z-view")]),t._v(" and some "),a("code",[t._v("z-spots")]),t._v(" buttons.")]),a("h2",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code","aria-hidden":"true"}},[t._v("#")]),t._v(" Code")]),a("p",[t._v("As we did previously, create a "),a("code",[t._v("scenes.vue")]),t._v(" file inside the "),a("code",[t._v("views")]),t._v(" folder and paste the following code:")]),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-view")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("label")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Scenes"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("slider")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v(":progress")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("progress"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v(":")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[t._v("styleActive")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{activeScene}}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      {{msg}}\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("extension"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-spot")]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(el, index) in elements"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("button")]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":distance")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("120"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":angle")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("325 + (90 / elements.length * index)"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[t._v("activeScene === el.scene ? "),a("span",{attrs:{class:"token property"}},[t._v("styleActive")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":key")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click.native")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showMe(el)"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fas"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el.icon"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-spot")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-view")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      activeScene"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Night'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      progress"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      elements"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("scene"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Day'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'orange'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'fa-sun'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Cooling rooms, blinds opened, playing ambient music'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("scene"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Night'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'fa-moon'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Blinds closed, AC in silence mode, motion sensors active'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("scene"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Away'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'fa-shield-alt'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Alarm armed, cameras activated, blinds closed'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("scene"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'At home'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'green'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'fa-home'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Lights in ambient mode, playing relax music, coffee is being prepared'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  computed"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("styleActive")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        borderWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'8px'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        borderColor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("showMe")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeScene "),a("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("progress "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activeScene "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Activating devices...'")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("progress "),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("clearInterval")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("progress "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n            vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("progress "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("40")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Applying rules...'")]),t._v("\n            vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("progress"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("progress"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'This scene is already activated'")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"what-the-code-does"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-the-code-does","aria-hidden":"true"}},[t._v("#")]),t._v(" What the code does")]),a("p",[t._v("Don't panic! Most of the code is similar to "),a("code",[t._v("settings")]),t._v(" view. But here we interact with a circular slider that is activated whenever the scene mode is changed to simulate the time required to activate it.")]),a("p",[t._v("Also, we are going to dynamically compute the angles of each "),a("code",[t._v("z-spot")]),t._v(" with a usefull trick.")]),a("h3",{attrs:{id:"z-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-view","aria-hidden":"true"}},[t._v("#")]),t._v(" z-view")]),a("p",[t._v("In "),a("code",[t._v("z-view")]),t._v(" we'll use two new properties that work together: "),a("code",[t._v("slider")]),t._v(" and "),a("code",[t._v("progress")]),t._v(".")]),a("p",[a("code",[t._v("slider")]),t._v(" is a circular bar that runs over the perimeter of "),a("code",[t._v("z-view")]),t._v(" according the value (0-100) of "),a("code",[t._v("progress")]),t._v(".")]),a("p",[t._v("In this example, the shoMe() method modifies the progress property value using a js "),a("code",[t._v("setInterval")])]),a("h3",{attrs:{id:"z-spot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-spot","aria-hidden":"true"}},[t._v("#")]),t._v(" z-spot")]),a("p",[t._v("As we did on previous views, we are using "),a("code",[t._v("z-spot")]),t._v(" with "),a("code",[t._v("v-for")]),t._v(" to iterate over our "),a("code",[t._v("scenes")]),t._v(". We set the "),a("code",[t._v("z-spots")]),t._v(" as buttons and define its proparties.")]),a("h4",{attrs:{id:"the-angle-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-angle-approach","aria-hidden":"true"}},[t._v("#")]),t._v(" The angle approach")]),a("p",[t._v("Previously, in the "),a("code",[t._v("settings")]),t._v(" view we added a field "),a("code",[t._v("angle")]),t._v("in the array "),a("code",[t._v("elements")]),t._v(", but in real life maybe we can't do that with an existing collection. To solve that we have to tell "),a("code",[t._v("angle")]),t._v(" that compute the correct angle for each "),a("code",[t._v("z-spot")]),t._v(" depending on the length of "),a("code",[t._v("scenes")]),t._v(", and other parameters.")]),a("div",{staticClass:"language-html extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v('\n  :angle="325 + (90 / elements.length * index)"\n'),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[a("strong",[t._v("'325'")]),t._v(" is the offset angle. It is the initial angle where each angle is calculated. In this case 325.")])]),a("li",[a("p",[a("strong",[t._v("'90'")]),t._v(" indicates the degree range to distribute the angles. In other words, we want all elements distributed along 90 degress.")])]),a("li",[a("p",[a("strong",[t._v("'elements.length'")]),t._v(" counts all scenes we have, that are multiplied by the current index.\nThat is a very granular formule to defines the angles for our "),a("code",[t._v("z-spots")]),t._v(". Depending on your needs, you can simplify it. For instance, if you want to uniformely distribute a bunch of z-spots around the parent element simply do this: "),a("code",[t._v(':angle="(360 / elements.length * index)"')]),t._v(". You can define another angle (180, 270, etc). It's up to you.")])])]),a("h4",{attrs:{id:"showme-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showme-method","aria-hidden":"true"}},[t._v("#")]),t._v(" showMe() method")]),a("p",[t._v("Finally, we have a method called "),a("code",[t._v("showMe()")]),t._v(". This method is activated when a "),a("code",[t._v("z-spot")]),t._v(" is clicked and runs a timer to increment the "),a("code",[t._v("progress")]),t._v(" property. When "),a("code",[t._v("progress")]),t._v(" has reached 40 we simulate that some rules are applied.")])])}],!1,null,null,null);s.default=e.exports}}]);