(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{408:function(t,a,r){"use strict";r.r(a);var e=r(16),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-运行时中的堆栈和队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-运行时中的堆栈和队列"}},[t._v("#")]),t._v(" javascript 运行时中的堆栈和队列")]),t._v(" "),a("blockquote",[a("p",[t._v("下面是一个理论上的模型，js 引擎着重实现和优化了描述的这几个语义")])]),t._v(" "),a("h2",{attrs:{id:"可视化描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可视化描述"}},[t._v("#")]),t._v(" 可视化描述")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/code/article/javascript/1.jpg",alt:"可视化描述"}})]),t._v(" "),a("h2",{attrs:{id:"栈-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈-stack"}},[t._v("#")]),t._v(" 栈(stack)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var a = 10;\nfunction bar(x) {\n  var b = 5;\n  fn(x + b);\n}\nfunction fn(y) {\n  var c = 5;\n}\nbar(10);\n")])])]),a("p",[t._v("js 会以一种执行栈的方式去执行代码，以一种入栈和出栈的方式，后进先出的完成代码执行，用下图表示如下（上下文描述可以忽略，有兴趣的可以参考"),a("a",{attrs:{href:"http://www.cnblogs.com/wangfupeng1988/p/3989357.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),a("OutboundLink")],1),t._v("，此文不作讲解）：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/code/article/javascript/2.png",alt:"执行栈"}})]),t._v(" "),a("h2",{attrs:{id:"堆-heap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆-heap"}},[t._v("#")]),t._v(" 堆(heap)")]),t._v(" "),a("p",[t._v("简单点说，就是一块内存区域，用来存储声明的变量、对象，相比栈而言，它是无结构的，而栈(stack)是有结构的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/code/article/javascript/3.png",alt:"堆"}})]),t._v(" "),a("h2",{attrs:{id:"队列-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#队列-queue"}},[t._v("#")]),t._v(" 队列(queue)")]),t._v(" "),a("p",[t._v("一个 js 运行时包含了一个待处理的消息队列，每一个消息都与一个函数相关联。当栈(stack)拥有足够内存时，从队列中取出一个消息进行处理。这个处理过程包含了调用与这个消息相关联的函数（以及因而创建了一个初始堆栈帧）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/code/article/javascript/4.jpg",alt:"队列"}})]),t._v(" "),a("h2",{attrs:{id:"事件循环-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环-event-loop"}},[t._v("#")]),t._v(" 事件循环（event loop）")]),t._v(" "),a("p",[t._v("在处理消息队列的时候，会涉及到事件循环(Event Loop)，用下图很好的描述了整体结构：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/code/article/javascript/5.jpg",alt:"事件循环"}})]),t._v(" "),a("p",[t._v("对事件循环的原理和 js 异步和线程感兴趣的，可以读读"),a("a",{attrs:{href:"https://www.cnblogs.com/kanyu/p/9838976.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/wangfupeng1988/p/3989357.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.cnblogs.com/wangfupeng1988/p/3989357.html"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2014/10/event-loop.html"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=s.exports}}]);