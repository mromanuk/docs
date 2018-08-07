(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{211:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),a("p",[a("code",[t._v("<z-list>")]),t._v(" uses "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots",target:"_blank",rel:"noopener noreferrer"}},[t._v("scoped slots"),a("OutboundLink")],1),t._v(" to customize the template of each item. When you click or touch an item, a new view is called showing its details.")]),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"rooms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rooms","aria-hidden":"true"}},[this._v("#")]),this._v(" Rooms")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This view displays the list of rooms of our home. Here we will learn how to use "),s("code",[this._v("z-list")]),this._v(" component. Also, we are going to learn how to pass parameters to new view using "),s("code",[this._v("to-view")]),this._v(" property. Finally we will se how to use "),s("code",[this._v("z-dialog")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code","aria-hidden":"true"}},[this._v("#")]),this._v(" Code")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Create a "),s("code",[this._v("rooms.vue")]),this._v(" file inside the "),s("code",[this._v("views")]),this._v(" folder and paste the following code:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-view")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Rooms\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("extension"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-list")]),t._v("\n      "),a("span",{attrs:{class:"token attr-name"}},[t._v(":items")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rooms"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{attrs:{class:"token attr-name"}},[t._v(":per-page")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-spot")]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("slot-scope")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":distance")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("60"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":index")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props.index"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":to-view")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props.name"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":label")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props.name"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":image-path")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props.image"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-spot")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("extension"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),a("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props.status"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v("\n            "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),a("span",{attrs:{class:"token attr-name"}},[t._v(":angle")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("-45"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n            "),a("span",{attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("xxs"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-spot")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-spot")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-list")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-spot")]),t._v(" \n        "),a("span",{attrs:{class:"token attr-name"}},[t._v("button")]),t._v("\n        "),a("span",{attrs:{class:"token attr-name"}},[t._v(":angle")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("45"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{attrs:{class:"token attr-name"}},[t._v(":distance")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("120"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{attrs:{class:"token attr-name"}},[t._v("label")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Add"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click.native")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("openDialog = true"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fas fa-plus"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-spot")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-dialog")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("openDialog"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("self-close")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("done")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("openDialog = false"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Are your sure?\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("extension")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-spot")]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("success"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("button")]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":angle")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("45"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":distance")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("120"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click.native")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("openDialog = false"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fas fa-check"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-spot")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-spot")]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("danger"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("button")]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":angle")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("135"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v(":distance")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("120"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click.native")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("openDialog = false"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fas fa-times"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-spot")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-dialog")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-view")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rooms"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Living'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" devices"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./living.jpg'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Bedroom'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" devices"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'alert'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Kitchen'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" devices"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Studio'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" devices"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Bath'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" devices"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"what-the-code-does"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-the-code-does","aria-hidden":"true"}},[this._v("#")]),this._v(" What the code does")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"z-view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#z-view","aria-hidden":"true"}},[this._v("#")]),this._v(" z-view")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("As usual we start with "),s("code",[this._v("z-view")]),this._v(". Inside it we place tha "),s("code",[this._v("z-list")]),this._v(" component using slot extension.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"z-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#z-list","aria-hidden":"true"}},[this._v("#")]),this._v(" z-list")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In this view we are using for first time the "),s("code",[this._v("z-list")]),this._v(" component, that is usefull when you need to show a list of items.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You have to populate the property "),s("code",[this._v("collection")]),this._v(" with an array of elements and define how many items per page you want to show using the property "),s("code",[this._v("per-page")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("z-list")]),t._v(" has two properties "),a("code",[t._v("list")]),t._v(", that is populated with an array of items (rooms), and "),a("code",[t._v("perPage")]),t._v(" that defines the number of items dispalyed in each 'page'. By default "),a("code",[t._v("perPage")]),t._v(" is set to show 5 items.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When the items are larger than a page the child component "),s("code",[this._v("z-list-pagination")]),this._v(" is activated showing a dot navigation at the botton of the "),s("code",[this._v("z-list")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"z-spot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#z-spot","aria-hidden":"true"}},[this._v("#")]),this._v(" z-spot")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Inside "),s("code",[this._v("z-list")]),this._v(" we use again our flexible "),s("code",[this._v("z-spot")]),this._v(" to show each room. There are four things to highlight:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("No angle is needed because is calculated automatically.")])]),a("li",[a("p",[t._v("We must use "),a("code",[t._v("slot-scope")]),t._v(" vue feature.")])]),a("li",[a("p",[t._v("we have to use the "),a("code",[t._v("z-spot")]),a("strong",[t._v("index")]),t._v(" prop.")])]),a("li",[a("p",[t._v("In this example, we are passing an object with params in the "),a("strong",[t._v("toView")]),t._v(" prop.")])]),a("li",[a("p",[a("strong",[t._v("toView property:")]),t._v("\nIt is possible to define a view to go for each item. To achieve that you need to use the property "),a("code",[t._v("toView")]),t._v(". We've already seen you can define a new view using just a "),a("code",[t._v("string")]),t._v(" with the view name or you can pass params using an "),a("code",[t._v("object")]),t._v(".")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("In case you pass "),a("code",[t._v("params")]),a("strong",[t._v("zircle ui")]),t._v(" allows to catch the params given using the "),a("strong",[t._v("zircle ui")]),t._v(" action "),a("code",[t._v("getParams()")]),t._v(" in your new view.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("image-path prop:")]),this._v(" we use for first time the "),s("code",[this._v("image-path")]),this._v(" prop. Alternatively, we can use an "),s("code",[this._v("image slot")]),this._v(". In those cases the image will be treated as a background.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"z-dialog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#z-dialog","aria-hidden":"true"}},[this._v("#")]),this._v(" z-dialog")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It is time to learn "),s("code",[this._v("z-dialog")]),this._v(". This component will show a modal dialog when is activated. It has a "),s("strong",[this._v("self-close")]),this._v(" property that will close the dialog after a certain time. Here we use it to simulate a modal confirming the action of add a new room.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("z-dialog")]),this._v(" will be rendered in case the variable "),s("strong",[this._v("opendialog")]),this._v(" is true. As we use the property "),s("strong",[this._v("selfColse")]),this._v(", the dialog will closed after a few seconds or when the user press any of the buttons.")])}],!1,null,null,null);s.default=e.exports}}]);