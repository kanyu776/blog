(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{398:function(t,a,s){"use strict";s.r(a);var r=s(16),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"web-前端性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-前端性能优化"}},[t._v("#")]),t._v(" web 前端性能优化")]),t._v(" "),a("h2",{attrs:{id:"请求阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求阶段"}},[t._v("#")]),t._v(" 请求阶段")]),t._v(" "),a("h4",{attrs:{id:"开启-http2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-http2"}},[t._v("#")]),t._v(" 开启 HTTP2")]),t._v(" "),a("ul",[a("li",[t._v("多路复用，突破 TCP 连接数限制")]),t._v(" "),a("li",[t._v("头部压缩，节省请求带宽")]),t._v(" "),a("li",[t._v("二进制分帧方式，提高通信效率")])]),t._v(" "),a("h4",{attrs:{id:"开启-http-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-http-缓存"}},[t._v("#")]),t._v(" 开启 http 缓存")]),t._v(" "),a("ul",[a("li",[t._v("利用 Expires 和 Cathe-Control 开启强缓存")]),t._v(" "),a("li",[t._v("利用 Last-Modified/If-Modified-Since 开启协商缓存")])]),t._v(" "),a("h4",{attrs:{id:"开启-gzip-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-gzip-压缩"}},[t._v("#")]),t._v(" 开启 gzip 压缩")]),t._v(" "),a("ul",[a("li",[t._v("降低关键资源的带宽体量")])]),t._v(" "),a("h4",{attrs:{id:"缩小请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩小请求头"}},[t._v("#")]),t._v(" 缩小请求头")]),t._v(" "),a("ul",[a("li",[t._v("减少一些不必要的 Cookie 信息携带")])]),t._v(" "),a("h4",{attrs:{id:"利用-cnd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用-cnd"}},[t._v("#")]),t._v(" 利用 CND")]),t._v(" "),a("ul",[a("li",[t._v("减少单次 RTT 时长，加速资源获取")])]),t._v(" "),a("h4",{attrs:{id:"域名分片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名分片"}},[t._v("#")]),t._v(" 域名分片")]),t._v(" "),a("ul",[a("li",[t._v("将一个网站的资源放在多个域名下面，拓展 TCP 连接数")])]),t._v(" "),a("h4",{attrs:{id:"降低-http-请求数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降低-http-请求数"}},[t._v("#")]),t._v(" 降低 HTTP 请求数")]),t._v(" "),a("ul",[a("li",[t._v("CSS 和 JS，根据实际情况，进行内联与合并")]),t._v(" "),a("li",[t._v("图片合成雪碧图，小图片 base64 化")]),t._v(" "),a("li",[t._v("避免 css @import")])]),t._v(" "),a("h4",{attrs:{id:"避免重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免重定向"}},[t._v("#")]),t._v(" 避免重定向")]),t._v(" "),a("ul",[a("li",[t._v("避免延迟整个 HTML 文档的传输")])]),t._v(" "),a("h4",{attrs:{id:"dns-预解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-预解析"}},[t._v("#")]),t._v(" DNS 预解析")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 打开DNS预读取 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x-dns-prefetch-control"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 强制查询特定主机名 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h4",{attrs:{id:"域名预连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名预连接"}},[t._v("#")]),t._v(" 域名预连接")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preconnect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"加载阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载阶段"}},[t._v("#")]),t._v(" 加载阶段")]),t._v(" "),a("h4",{attrs:{id:"资源压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源压缩"}},[t._v("#")]),t._v(" 资源压缩")]),t._v(" "),a("ul",[a("li",[t._v("对前端资源进行压缩")])]),t._v(" "),a("h4",{attrs:{id:"加载时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载时机"}},[t._v("#")]),t._v(" 加载时机")]),t._v(" "),a("ul",[a("li",[t._v("js 设置为异步加载（defer/async）")])]),t._v(" "),a("h4",{attrs:{id:"加载策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载策略"}},[t._v("#")]),t._v(" 加载策略")]),t._v(" "),a("ul",[a("li",[t._v("SPA 业务中，模块按需加载（路由懒加载）")]),t._v(" "),a("li",[t._v("css 媒体查询，定义场景加载")]),t._v(" "),a("li",[t._v("图片懒加载")])]),t._v(" "),a("h4",{attrs:{id:"预获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预获取"}},[t._v("#")]),t._v(" 预获取")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h4",{attrs:{id:"预加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预加载"}},[t._v("#")]),t._v(" 预加载")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"渲染阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染阶段"}},[t._v("#")]),t._v(" 渲染阶段")]),t._v(" "),a("h4",{attrs:{id:"预渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预渲染"}},[t._v("#")]),t._v(" 预渲染")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prerender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h4",{attrs:{id:"避免使用-iframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免使用-iframe"}},[t._v("#")]),t._v(" 避免使用 iframe")]),t._v(" "),a("ul",[a("li",[t._v("iframe 连接页面后，会开启独立的页面进程，消耗资源")])]),t._v(" "),a("h4",{attrs:{id:"html-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-优化"}},[t._v("#")]),t._v(" HTML 优化")]),t._v(" "),a("ul",[a("li",[t._v("控制 html 标签层级，减轻解析负担，降低解析时间")]),t._v(" "),a("li",[t._v("首屏 html 可以少量，主体结构动态插入")])]),t._v(" "),a("h4",{attrs:{id:"css-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-优化"}},[t._v("#")]),t._v(" CSS 优化")]),t._v(" "),a("ul",[a("li",[t._v("CSS 文件放 head，让 CSSOM 先行，避免阻塞渲染树")]),t._v(" "),a("li",[t._v("控制 css 选择器层级，不要太深，降低匹配开销")]),t._v(" "),a("li",[t._v("尽量用 id 和 class 选择器，不要过渡层叠")]),t._v(" "),a("li",[t._v("避免使用通配符，提高匹配效率")])]),t._v(" "),a("h4",{attrs:{id:"js-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-优化"}},[t._v("#")]),t._v(" JS 优化")]),t._v(" "),a("ul",[a("li",[t._v("JS 文件放在 body 底部，避免阻塞 DOM 树构建")]),t._v(" "),a("li",[t._v("避免在 body 内容中间插入 script 脚本")])]),t._v(" "),a("h2",{attrs:{id:"运行阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行阶段"}},[t._v("#")]),t._v(" 运行阶段")]),t._v(" "),a("h4",{attrs:{id:"css-层面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-层面"}},[t._v("#")]),t._v(" CSS 层面")]),t._v(" "),a("ul",[a("li",[t._v("给图片设置尺寸，避免载入显示后，造成重排")]),t._v(" "),a("li",[t._v("巧用绝对定位，脱离文档流，避免后续操作，造成重排\n"),a("ul",[a("li",[t._v("因为绝对定位的元素一般处于默认复合层，所以它的改变还是会造成整个图层的重绘")])])]),t._v(" "),a("li",[t._v("巧用合成属性（will-change/3D transform）\n"),a("ul",[a("li",[t._v("新建合成层，独立于默认复合层，后续改变不会造成重拍/重绘")]),t._v(" "),a("li",[t._v("因为是合成层，运作基于合成线程，未占用主线程，效率较高")]),t._v(" "),a("li",[t._v("能用 CSS 实现的效果，尽量不用 JS 实现，充分发挥合成线程的能力，避免主线程占用")]),t._v(" "),a("li",[t._v("利用合成属性时，一定要设置 z-index，防止后面的重叠元素同样被游览器新建图层，浪费资源")])])])]),t._v(" "),a("h4",{attrs:{id:"js-层面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-层面"}},[t._v("#")]),t._v(" JS 层面")]),t._v(" "),a("ul",[a("li",[t._v("巧用异步处理，减少 js 对主线程的长时占用（定时器/Web Worker）")]),t._v(" "),a("li",[t._v("不影响 this 的情况下，对反复访问的对象进行变量保存")]),t._v(" "),a("li",[t._v("避免过长的对象层次访问，提高读取效率")]),t._v(" "),a("li",[t._v("合理使用局部变量，减少作用域跨越")]),t._v(" "),a("li",[t._v("减少使用 for...in 循环，避免遍历原型链")]),t._v(" "),a("li",[t._v("巧用事件委托，降低事件绑定的内存占用")]),t._v(" "),a("li",[t._v("慎用闭包，避免使用 with 和 eval")]),t._v(" "),a("li",[t._v("条件判断上，避免类型转换")]),t._v(" "),a("li",[t._v("条件较多时，使用 switch 代替 if..else")]),t._v(" "),a("li",[t._v("最小化语句数，避免多个声明")]),t._v(" "),a("li",[t._v("简化终止条件，简化循环体，减值迭代")]),t._v(" "),a("li",[t._v('减少字符串拼接，避免"临时字符串"的出现')]),t._v(" "),a("li",[t._v("当叠加字符串的时候，字符串变量应该靠左")]),t._v(" "),a("li",[t._v("数组 join 方法，比其他字符串连接方式慢")]),t._v(" "),a("li",[t._v("字符串 concat 方法，比使用简单的+和+=慢")])]),t._v(" "),a("h4",{attrs:{id:"dom-层面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-层面"}},[t._v("#")]),t._v(" DOM 层面")]),t._v(" "),a("ul",[a("li",[t._v("尽量用新选择器 API 代替老 API")]),t._v(" "),a("li",[t._v("尽量通过 Id 和 Class 选择器进行 DOM 获取")]),t._v(" "),a("li",[t._v("避免直接操作 style 进行布局信息修改，造成重排")]),t._v(" "),a("li",[t._v("避免强制同步布局（在 JS 更改 DOM 信息后，立即访问）")]),t._v(" "),a("li",[t._v("DOM 集合操作非常昂贵，应转换为数组再进行操作")]),t._v(" "),a("li",[t._v("对 dom 访问信息进行缓存，对 dom 改变进行批量操作")]),t._v(" "),a("li",[t._v("对操作频繁的 dom，尽可能采用 position:absolute（避免重排）")]),t._v(" "),a("li",[t._v("对操作密集的 dom，先 display:none——>操作——>再 display:block（避免重排）")]),t._v(" "),a("li",[t._v("对操作量很大的 dom，采用文档碎片 createDocumentFragment")])]),t._v(" "),a("h4",{attrs:{id:"webapi-层面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webapi-层面"}},[t._v("#")]),t._v(" webApi 层面")]),t._v(" "),a("ul",[a("li",[t._v("用 requestAnimationFrame 代替 setTimeOut/setInterval 进行动画实现")]),t._v(" "),a("li",[t._v("根据业务情况，适时使用 Storage 和 IndexDB 缓存数据，减少不必要的 ajax 请求")]),t._v(" "),a("li",[t._v("利用 Web Worker 处理无关 dom 的任务，减少对主线程的时间占用")]),t._v(" "),a("li",[t._v("对那些不会改变服务器状态，只获取数据的 Ajax 请求，应该使用 get 类型（让游览器缓存起来）")])])])}),[],!1,null,null,null);a.default=e.exports}}]);