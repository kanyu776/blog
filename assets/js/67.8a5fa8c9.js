(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{437:function(_,v,t){"use strict";t.r(v);var p=t(16),o=Object(p.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"深入理解-javascript-原型和闭包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#深入理解-javascript-原型和闭包"}},[_._v("#")]),_._v(" 深入理解 javascript 原型和闭包")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("一切都是对象，对象都是通过函数创建的")])]),_._v(" "),v("li",[v("p",[_._v("对象是属性的集合,因此属性中的方法其实也是属性的一种")])]),_._v(" "),v("li",[v("p",[_._v("函数也是一种对象，因此也是属性的集合，可以对其进行自定义属性")])]),_._v(" "),v("li",[v("p",[_._v("每个函数都有一个属性"),v("code",[_._v("prototype")]),_._v("，属性值为一个对象——原型对象")])]),_._v(" "),v("li",[v("p",[_._v("每个对象都有一个隐式"),v("code",[_._v("__proto__")]),_._v("属性，指向创建该对象的函数的"),v("code",[_._v("prototype")])])]),_._v(" "),v("li",[v("p",[_._v("原型对象默认只有一个"),v("code",[_._v("constructor")]),_._v("的属性，指向函数本身")])]),_._v(" "),v("li",[v("p",[_._v("Function 内置对象的"),v("code",[_._v("__proto__")]),_._v("指向了自身的"),v("code",[_._v("Prototype")]),_._v("，被自身创建")])]),_._v(" "),v("li",[v("p",[_._v("自定义或内置函数的"),v("code",[_._v("prototype")]),_._v("本质上是和"),v("code",[_._v("var obj={}")]),_._v("一样的 Object 实例，都是被 Object 创建。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("因此根据语言的继承特性，默认原型都会包含一个内部指针，指向"),v("code",[_._v("Object.prototype")])])]),_._v(" "),v("li",[v("p",[_._v("因此"),v("code",[_._v("Object.prototype")]),_._v("里的所有属性和方法被理所应当的继承了下来")])])])]),_._v(" "),v("li",[v("p",[_._v('执行上下文激活相当于代码的"前期准备工作"，是在被调用时创建的，其数据内容包括：')]),_._v(" "),v("ul",[v("li",[v("p",[_._v("全局代码的上下文环境")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("a.变量、函数表达式 ——变量声明(默认赋值为"),v("code",[_._v("undefined")]),_._v(")")])]),_._v(" "),v("li",[v("p",[_._v("b.this ——赋值")])]),_._v(" "),v("li",[v("p",[_._v("c.函数声明 ——赋值")])])])]),_._v(" "),v("li",[v("p",[_._v("函数体的上下文环境")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("a.参数 ——赋值")])]),_._v(" "),v("li",[v("p",[_._v("b.arguments ——赋值")])]),_._v(" "),v("li",[v("p",[_._v("c.自由变量 ——赋值")])])])])])]),_._v(" "),v("li",[v("p",[_._v("函数每被调用一次，都会产生一个新的执行上下文环境，执行完后上下文环境即被销毁")])]),_._v(" "),v("li",[v("p",[_._v("作用域是在函数创建时就产生的，同一个作用域下可能同时存在不同的执行上下文")])]),_._v(" "),v("li",[v("p",[_._v("在函数中 this 到底取何值，是在函数真正被调用执行的时候确定的，函数定义的时候确定不了")])]),_._v(" "),v("li",[v("p",[_._v("处于活动状态的执行上下文环境只有一个，其实这是一个压栈出栈的过程——执行上下文栈")])]),_._v(" "),v("li",[v("p",[_._v("在当前作用域中使用，却没在当前作用域中创建的变量为自由变量")])]),_._v(" "),v("li",[v("p",[_._v("对于自由变量的取值，要到创建它的那个作用域中取值——是创建而不是调用")])])])])}),[],!1,null,null,null);v.default=o.exports}}]);