(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{409:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript-单线程-异步与执行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-单线程-异步与执行机制"}},[t._v("#")]),t._v(" javascript 单线程，异步与执行机制")]),t._v(" "),s("blockquote",[s("p",[t._v("js 的单线程模型与游览器的进程/线程息息相关，在了解 js 单线程与异步的时候，建议先看看"),s("a",{attrs:{href:"https://www.cnblogs.com/kanyu/p/9829555.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"为什么是单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么是单线程"}},[t._v("#")]),t._v(" 为什么是单线程")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("由于 js 是可操作 dom 的，如果 js 是多线程，在多线程的交互下，处于界面中的 dom 节点就可能成为一个临界资源。")])]),t._v(" "),s("li",[s("p",[t._v("这个时候，如果两个线程同时操作一个 dom，一个负责修改，一个负责删除，这时就会出现问题。")])]),t._v(" "),s("li",[s("p",[t._v("虽然可以通过锁来解决上面的问题，但为了避免因为引入了锁而带来更大的复杂性，js 在最初就选择了单线程。")])]),t._v(" "),s("li",[s("p",[t._v("强调一下，这里的单线程指的是渲染主线程，因为 js 引擎是运行在其上的，js 并没有单独的运行线程，下面强调的主线程均为游览器的渲染主线程，可以理解为 js 运行和页面渲染都是在这一个线程上工作。")])])]),t._v(" "),s("h2",{attrs:{id:"为什么需要异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要异步"}},[t._v("#")]),t._v(" 为什么需要异步")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("由于 js 是可操纵 dom 的，如果在修改这些 dom 的同时渲染界面（即 js 引擎和 blink 引擎同时运行），那么渲染前后获得的元素数据就可能不一致了。")])]),t._v(" "),s("li",[s("p",[t._v("为了防止渲染出现不可预期的结果，浏览器将 gui 渲染与 js 运行设置为互斥关系，当 js 引擎执行时，gui 渲染就会被挂起，等到 js 空闲时才会被执行。")])]),t._v(" "),s("li",[s("p",[t._v("所以，如果 js 执行时间过长（同步 ajax），就会让页面卡死，造成渲染阻塞。因此，js 的异步特性就显得很有必要了。")])])]),t._v(" "),s("h2",{attrs:{id:"如何实现异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何实现异步"}},[t._v("#")]),t._v(" 如何实现异步")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("通过事件驱动机制，来实现异步任务等待，同步任务先执行。")])]),t._v(" "),s("li",[s("p",[t._v("当 js 在主线程上执行完同步任务后，再自动去拿留待的异步任务去执行。")])])]),t._v(" "),s("h2",{attrs:{id:"异步编程模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步编程模型"}},[t._v("#")]),t._v(" 异步编程模型")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("传统异步回调的问题")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("代码可读性")])]),t._v(" "),s("li",[s("p",[t._v("流程控制")])]),t._v(" "),s("li",[s("p",[t._v("异常和错误处理")])])])]),t._v(" "),s("li",[s("p",[t._v("异步编程的变革")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Promise")])]),t._v(" "),s("li",[s("p",[t._v("Generator")])]),t._v(" "),s("li",[s("p",[t._v("Async/await")])])])])]),t._v(" "),s("h2",{attrs:{id:"执行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行机制"}},[t._v("#")]),t._v(" 执行机制")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("js 执行涉及主线程和执行栈，所有的程序任务都会被放到执行栈中被 js 引擎执行。")])]),t._v(" "),s("li",[s("p",[t._v("js 执行采用后进先出的原则。当函数执行的时候，会被添加到栈的顶部；当执行栈执行完后，就会从栈顶被移出，直到栈内被清空。")])]),t._v(" "),s("li",[s("p",[t._v("主线程上的程序执行，由 js 引擎负责；事件队列，由事件触发线程管理。")])])]),t._v(" "),s("h2",{attrs:{id:"事件驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动"}},[t._v("#")]),t._v(" 事件驱动")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("事件驱动机制（event driven）通过事件队列（event queue）和事件循环（event loop）来实现。")])]),t._v(" "),s("li",[s("p",[t._v("事件队列（event queue），也称消息队列/任务队列，由异步 I/O 操作发起，里面存放着各种事件消息，这些消息都关联着回调函数。")])]),t._v(" "),s("li",[s("p",[t._v("事件循环（event loop），是指主线程重复从消息队列中取消息、执行的过程，这些消息有些是 js 产生的，有些是页面加载，更新和网络请求产生的。")])])]),t._v(" "),s("h3",{attrs:{id:"模型图示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模型图示"}},[t._v("#")]),t._v(" 模型图示")]),t._v(" "),s("p",[s("img",{attrs:{src:"/code/article/javascript/5.jpg",alt:"事件驱动机制"}})]),t._v(" "),s("h2",{attrs:{id:"任务类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务类型"}},[t._v("#")]),t._v(" 任务类型")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("从执行时机的角度")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("同步任务，存放在执行栈中，会被主线程依次执行的任务")])]),t._v(" "),s("li",[s("p",[t._v("异步任务，存放在事件队列中，会在异步操作有了结果后，将注册回调放入这个队列，等待主线程空闲时，被拉取到执行栈中执行。（空闲时，意味着同步任务已被执行完，执行栈为空了）")])])])]),t._v(" "),s("li",[s("p",[t._v("从提供者的角度")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("宏任务（macrotask），由宿主环境提供——setTimeout，setInterval，setImmediate，I/O，UI rendering 事件，postMessage，MessageChannel")])]),t._v(" "),s("li",[s("p",[t._v("微任务（microtask），由语言标准提供——Promise.then，process.nextTick，Object.observe(已废弃)，MutationObserver")])])])])]),t._v(" "),s("h2",{attrs:{id:"任务机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务机制"}},[t._v("#")]),t._v(" 任务机制")]),t._v(" "),s("ul",[s("li",[t._v("所有同步任务在执行完之前，任何的异步任务是不会执行的。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果为A。因为同步任务被死循环卡住了，任务队列里的任务不会被主线程拉取进执行栈")]),t._v("\n")])])]),s("ul",[s("li",[t._v("每执行一个宏任务后，就会执行所有微任务。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/code/article/javascript/6.png",alt:"任务机制"}})]),t._v(" "),s("ul",[s("li",[t._v("为了使 js 任务与 dom 任务能够有序执行，会在一个 task 执行结束后，在下一个 task 执行开始前，对页面进行重新渲染 （task(宏->微)->render->task(宏->微)--\x3e...）")])]),t._v(" "),s("h2",{attrs:{id:"宏任务-微任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宏任务-微任务"}},[t._v("#")]),t._v(" 宏任务/微任务")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1 个事件循环中，宏任务可以有多个，微任务只有 1 个。")])]),t._v(" "),s("li",[s("p",[t._v("以银行排号为例，1 个柜台对应多个用户，每个用户都是 1 个宏任务，当用户办完"),s("strong",[t._v("主任务(宏)后")]),t._v("，"),s("strong",[t._v("突然想到要办理很多次要任务(微)")]),t._v("，银行柜员会一次帮他解决所有需求，而不是让他重新排队")])])]),t._v(" "),s("h3",{attrs:{id:"程序模型图示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#程序模型图示"}},[t._v("#")]),t._v(" 程序模型图示")]),t._v(" "),s("p",[s("img",{attrs:{src:"/code/article/javascript/7.png",alt:"宏任务/微任务拓展"}})]),t._v(" "),s("h3",{attrs:{id:"执行机制详述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行机制详述"}},[t._v("#")]),t._v(" 执行机制详述")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("执行一个宏任务，主栈中没有就从事件队列中获取。")])]),t._v(" "),s("li",[s("p",[t._v("执行过程中如果遇到微任务，就将它添加到微任务的任务队列中。")])]),t._v(" "),s("li",[s("p",[t._v("宏任务执行完毕后，立即依次执行当前微任务队列中的所有微任务。")])]),t._v(" "),s("li",[s("p",[t._v("当微任务执行完毕，开始检查渲染，然后 blink 引擎接管渲染。")])]),t._v(" "),s("li",[s("p",[t._v("渲染完毕后，js 引擎继续接管，开始下一个宏任务。")])])]),t._v(" "),s("h3",{attrs:{id:"执行机制样例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行机制样例"}},[t._v("#")]),t._v(" 执行机制样例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPromise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1，2，3，4，5，6")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一轮任务中，宏任务为全局script（刚好处于执行栈内，不用在事件队列中取），所以先是1，2；")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同时，由于执行过程中遇到了setTimeout，将其再放入宏任务队列，遇到了promise，将其放入微任务队列；")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该轮宏任务执行完毕后，开始执行微任务，将微任务全部取出，一次执行，因此再是3，4；")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始第二轮任务，取出的宏任务为setTimeout回调，因此结果是5；")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同时执行这轮宏任务回调时，又遇到promise，再将其放入微任务队列；")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当这轮宏任务setTimeout回调结束后，立即刚才加入的微任务取出执行，因此结果为6；")]),t._v("\n")])])]),s("h3",{attrs:{id:"api-优先级顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-优先级顺序"}},[t._v("#")]),t._v(" api 优先级顺序")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("html5 新特性 MutationObserver 属于"),s("strong",[t._v("微任务")]),t._v("，优先级小于 Promise")])]),t._v(" "),s("li",[s("p",[t._v("html5 新特性 MessageChannel 属于"),s("strong",[t._v("宏任务")]),t._v("，优先级是：setImmediate->MessageChannel->setTimeout。")])]),t._v(" "),s("li",[s("p",[t._v("在 node 环境的"),s("strong",[t._v("微任务")]),t._v("执行中，process.nextTick 的优先级高于 promise。")])]),t._v(" "),s("li",[s("p",[t._v("在 node 环境的"),s("strong",[t._v("宏任务")]),t._v("执行中，setImmediate 的优先级高于 setTimeout。")])])]),t._v(" "),s("h2",{attrs:{id:"vue-nexttick-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-nexttick-实现"}},[t._v("#")]),t._v(" Vue.nextTick 实现")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("2.4 版本时，Vue 通过利用 MutationObserver 来模拟 nextTick（MutationObserver 为 H5 新特性，用于监听一个 dom 变动， 当 dom 对象树发生任何变动时，Mutation Observer 会得到通知）")])]),t._v(" "),s("li",[s("p",[t._v("2.5 版本开始，nextTick 实现移除了 MutationObserver 的方式（兼容性原因）， 取而代之的是使用 MessageChannel （当然，默认情况仍然是 Promise，不支持才兼容的）")])]),t._v(" "),s("li",[s("p",[t._v("由于，js 执行是单线程，在一个 tick 的过程中，可能会存在多次修改数据，vue 会把这些数据修改先统一 push 到一个队列里，然后内部调用 1 次 nextTick 去更新视图。")])]),t._v(" "),s("li",[s("p",[t._v("因此，vue 从数据改变到 dom 视图变化是需要在下一个 tick 才能完成的，这种数据驱动变化的原理符合游览器的原理（js 运行和 gui 渲染互斥）和处理策略（task(宏->微)->render->task(宏->微)--\x3e...）")])]),t._v(" "),s("li",[s("p",[t._v("最终，Vue.nextTick 采取的策略是默认走 microtask，对于一些 dom 交互事件，如 v-on 绑定的事件回调函数的处理，会强制走 macrotask。对于 macrotask 的执行，vue 优先检测是否支持原生 setImmediate（高版本游览器支持），不支持的话再去检测是否支持原生的 MessageChannel，如果也不支持的话就会降级为 setTimeout 0。")])])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000004322358",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000004322358"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://www.imweb.io/topic/58e3bfa845e5c13468f567d5",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.imweb.io/topic/58e3bfa845e5c13468f567d5"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://www.cnblogs.com/mininice/p/4298952.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.cnblogs.com/mininice/p/4298952.html"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/59e85eebf265da430d571f89",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/59e85eebf265da430d571f89"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://www.dailichun.com/2018/01/21/js_singlethread_eventloop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.dailichun.com/2018/01/21/js_singlethread_eventloop.html"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/5a6ad46ef265da3e513352c8",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5a6ad46ef265da3e513352c8"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=e.exports}}]);