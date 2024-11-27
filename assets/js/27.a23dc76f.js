(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{398:function(t,a,s){"use strict";s.r(a);var e=s(16),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"游览器解析与渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游览器解析与渲染"}},[t._v("#")]),t._v(" 游览器解析与渲染")]),t._v(" "),a("h2",{attrs:{id:"整体流程概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体流程概述"}},[t._v("#")]),t._v(" 整体流程概述")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("DNS 域名解析")])]),t._v(" "),a("li",[a("p",[t._v("建立 TCP 连接")])]),t._v(" "),a("li",[a("p",[t._v("发送 HTTP 请求")])]),t._v(" "),a("li",[a("p",[t._v("服务器处理请求")])]),t._v(" "),a("li",[a("p",[t._v("返回响应结果")])]),t._v(" "),a("li",[a("p",[t._v("关闭 TCP 连接")])]),t._v(" "),a("li",[a("p",[t._v("浏览器解析渲染")])])]),t._v(" "),a("h2",{attrs:{id:"dns-域名解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-域名解析"}},[t._v("#")]),t._v(" DNS 域名解析")]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/2.png",alt:""}})]),t._v(" "),a("ol",[a("li",[a("p",[t._v("我们在游览器输入网址后，游览器会首先会去查找本地 hosts 文件，检查在该文件中是否有相应的域名、IP 对应关系，如果有，则向其 IP 地址发送请求，如果没有，再去找 DNS 服务器。")])]),t._v(" "),a("li",[a("p",[t._v("在查询 DNS 服务器的过程中，客户端首先会向本地 DNS 服务器发送网址的查询报文，本地 DNS 服务器再把查询报文转发到根 DNS 服务器，根 DNS 服务器再根据网址后缀派发指定的节点 DNS 服务器，然后本地 DNS 服务器再向这个节点 DNS 服务器发送查询请求，后者返回该网址对应的 ip 地址。")])]),t._v(" "),a("li",[a("p",[t._v("当本地 DNS 服务器的缓存中已有节点服务器的地址，则会直接向节点服务器发送查询请求，因此请求根域名服务器这一步不是必需的。")])]),t._v(" "),a("li",[a("p",[t._v("从客户端到本地服务器属于递归查询，而 DNS 服务器之间的交互属于迭代查询。")])])]),t._v(" "),a("h2",{attrs:{id:"建立-tcp-链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立-tcp-链接"}},[t._v("#")]),t._v(" 建立 TCP 链接")]),t._v(" "),a("p",[t._v("拿到服务器 ip 地址后，游览器客户端会开始与服务器进行交互，建立 TCP 链接，这个过程涉及"),a("strong",[t._v("三次握手")]),t._v("，握手结束，则代表链接建立成功。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/3.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"发送-http-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送-http-请求"}},[t._v("#")]),t._v(" 发送 HTTP 请求")]),t._v(" "),a("p",[t._v("与服务器建立了连接后，就可以向服务器发起请求了。请求报文结构如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/4.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/5.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"服务器处理请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器处理请求"}},[t._v("#")]),t._v(" 服务器处理请求")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("请求收到后，先由 web 服务器（准确说应该是 http 服务器）处理请求，诸如 Apache、Ngnix、IIS 等，然后再进入服务端进行程序处理。")])]),t._v(" "),a("li",[a("p",[t._v("服务端解析用户请求，知道了需要调度哪些资源文件，再通过相应的这些资源文件处理用户请求和参数，并调用数据库信息，最后将结果通过 web 服务器返回给浏览器客户端。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/6.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"返回响应结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回响应结果"}},[t._v("#")]),t._v(" 返回响应结果")]),t._v(" "),a("p",[t._v("服务器处理完请求后，就会发送响应结果，响应报文的结构如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/7.png",alt:""}})]),t._v(" "),a("p",[t._v("响应结果中会有对应的 HTTP 状态码，可分为 5 类：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/8.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"关闭-tcp-连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭-tcp-连接"}},[t._v("#")]),t._v(" 关闭 TCP 连接")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("为了避免服务器与客户端双方的资源占用和损耗，当双方没有请求或响应传递时，任意一方都可以发起关闭请求。")])]),t._v(" "),a("li",[a("p",[t._v("与创建 TCP 连接的 3 次握手类似，关闭 TCP 连接，需要 4 次握手。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/9.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"游览器解析渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游览器解析渲染"}},[t._v("#")]),t._v(" 游览器解析渲染")]),t._v(" "),a("h3",{attrs:{id:"关键渲染路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键渲染路径"}},[t._v("#")]),t._v(" 关键渲染路径")]),t._v(" "),a("p",[t._v("浏览器从最初接收请求来的 HTML、CSS、javascript 等资源，然后解析、构建树、渲染布局、绘制，最后呈现给客户能看到的界面这整个过程——简单来说，就是对游览器渲染过程的描述。")]),t._v(" "),a("h3",{attrs:{id:"渲染步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染步骤"}},[t._v("#")]),t._v(" 渲染步骤")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("解析 html，生成 dom 树")])]),t._v(" "),a("li",[a("p",[t._v("解析 css，生成 cssom 树")])]),t._v(" "),a("li",[a("p",[t._v("将 dom 树和 cssom 树合并，生成渲染树")])]),t._v(" "),a("li",[a("p",[t._v("遍历渲染树，开始布局和计算")])]),t._v(" "),a("li",[a("p",[t._v("绘制渲染树，显示到屏幕")])])]),t._v(" "),a("h3",{attrs:{id:"渲染图示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染图示"}},[t._v("#")]),t._v(" 渲染图示")]),t._v(" "),a("p",[t._v("以 webkit 渲染引擎为例")]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/10.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程"}},[t._v("#")]),t._v(" 渲染过程")]),t._v(" "),a("h4",{attrs:{id:"解析-html-生成-dom-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析-html-生成-dom-树"}},[t._v("#")]),t._v(" 解析 html，生成 dom 树")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当浏览器接收到服务器响应来的 HTML 文档后，会自上而下扫描文档，开始解析，遍历文档节点，生成 DOM 树。")])]),t._v(" "),a("li",[a("p",[t._v("整个构建过程其实包括： 字节 -> 字符 -> 令牌 -> 节点对象 -> 对象模型")])]),t._v(" "),a("li",[a("p",[t._v("下面是示例代码和配图")])])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width,initial-scale=1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Critical Path"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("web performance"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" students!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("awesome-photo.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"/code/article/browser/11.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"解析-css-生成-cssom-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析-css-生成-cssom-树"}},[t._v("#")]),t._v(" 解析 css，生成 cssom 树")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("解析 css 文件，生成 css 规则树。")])]),t._v(" "),a("li",[a("p",[t._v("每个 css 文件都被分析成一个 stylesheet 对象，每个对象都包含 CSS 规则。")])]),t._v(" "),a("li",[a("p",[t._v("css 规则对象包含对应于 css 语法的选择器和声明对象以及其他对象。")])]),t._v(" "),a("li",[a("p",[t._v("构建过程没有什么特别的差别，下面是示例代码和配图：")])])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"/code/article/browser/12.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"将-dom-树和-cssom-树合并-生成渲染树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-dom-树和-cssom-树合并-生成渲染树"}},[t._v("#")]),t._v(" 将 dom 树和 cssom 树合并，生成渲染树")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("浏览器会先从 dom 树的根节点开始遍历每个可见节点，找到其适配的 CSS 样式规则并应用。")])]),t._v(" "),a("li",[a("p",[t._v("将 dom 树与 cssom 树结合在一起，这就是渲染树。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/code/article/browser/13.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("每一个渲染对象都对应着 dom 节点，但是非视觉（隐藏，不占位）dom 元素不会插入渲染树，如"),a("code",[t._v("<head>")]),t._v("元素或声明"),a("code",[t._v("display: none;")]),t._v("的元素。")])]),t._v(" "),a("li",[a("p",[t._v("渲染对象与 dom 节点不是简单的一对一的关系，一个 dom 可以对应一个渲染对象，但一个 dom 元素也可能对应多个渲染对象，因为有很多元素不止包含一个 css 盒子。")])]),t._v(" "),a("li",[a("p",[t._v("如当文本被折行时，会产生多个行盒，这些行会生成多个渲染对象；又如行内元素同时包含块元素和行内元素，则会创建一个匿名块级盒包含内部行内元素，此时一个 dom 对应多个渲染对象。")])])]),t._v(" "),a("h4",{attrs:{id:"遍历渲染树-开始布局和计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历渲染树-开始布局和计算"}},[t._v("#")]),t._v(" 遍历渲染树，开始布局和计算")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("布局阶段会从渲染树的根节点开始遍历，然后确定每个节点对象在页面上的确切大小与位置。")])]),t._v(" "),a("li",[a("p",[t._v("布局阶段的输出是一个盒子模型，它会精确地捕获每个元素在屏幕内的确切位置与大小，所有相对的测量值也都会被转换为屏幕内的绝对像素值。")])])]),t._v(" "),a("h4",{attrs:{id:"绘制渲染树-显示到屏幕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制渲染树-显示到屏幕"}},[t._v("#")]),t._v(" 绘制渲染树，显示到屏幕")]),t._v(" "),a("ul",[a("li",[t._v("在绘制阶段，浏览器会立即发出 Paint Setup 与 Paint 事件，开始将渲染树绘制成像素，绘制所需的时间跟 CSS 样式的复杂度成正比，绘制完成后，用户就可以看到页面的最终呈现效果了。")])]),t._v(" "),a("h2",{attrs:{id:"相关知识补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关知识补充"}},[t._v("#")]),t._v(" 相关知识补充")]),t._v(" "),a("h3",{attrs:{id:"资源并行加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源并行加载"}},[t._v("#")]),t._v(" 资源并行加载")]),t._v(" "),a("ul",[a("li",[t._v("现代浏览器总是并行加载资源，当 html 解析器被脚本阻塞时，解析器虽然会停止构建 dom，但仍会识别该脚本后面的资源，并进行预加载")])]),t._v(" "),a("h3",{attrs:{id:"重绘-重排-回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘-重排-回流"}},[t._v("#")]),t._v(" 重绘/重排/回流")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("重绘(replaint)——屏幕的一部分重画，不影响整体布局，比如某个 CSS 的背景色变了，但元素的几何尺寸和位置不变。")])]),t._v(" "),a("li",[a("p",[t._v("重排(relayout)——意味着元件的几何尺寸变了，我们需要重新验证并计算渲染树。")])]),t._v(" "),a("li",[a("p",[t._v("回流(reflow)——Gecko 中布局的称谓，同时也是重排的别称，是指渲染树的一部分或全部发生了变化。")])])]),t._v(" "),a("h3",{attrs:{id:"js-阻塞-dom-解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-阻塞-dom-解析"}},[t._v("#")]),t._v(" js 阻塞 dom 解析")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("由于 js 引擎和 gui 引擎互斥，所以当 js 执行的时候，gui 就会被挂起，dom 解析停滞，形成阻塞。")])]),t._v(" "),a("li",[a("p",[t._v("值得注意的是，js 只会阻塞后续的 dom 而不一定是整个 dom，也就是说，在这个 js 前面的 dom 可以被正确地解析以及渲染（这也是为什么我们把脚本放在页面底部，脚本仍在下载时页面已经可以部分地正常显示）。")])])]),t._v(" "),a("h3",{attrs:{id:"css-阻塞-dom-解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-阻塞-dom-解析"}},[t._v("#")]),t._v(" css 阻塞 dom 解析")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("正常情况是不会的，但是当执行的 js 依赖于 css 的样式时就会发生，这种情况发生在"),a("strong",[t._v("css 文件排在 js 文件之前")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("当 js 执行时，考虑到文档解析，如果样式尚未加载或解析，将会得到错误信息。firefox 和 webkit 浏览器处理策略不同，前者会阻塞所有脚本，后者只会阻塞操作了该文件内声明的样式属性的脚本。")])]),t._v(" "),a("li",[a("p",[t._v("当游览器考虑到 js 执行需要 css 时，通过处理策略阻塞 js 脚本，dom 解析自然也就被阻塞了，这也就是 css 为什么会阻塞 dom 解析")])])]),t._v(" "),a("h3",{attrs:{id:"css-阻塞-dom-渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-阻塞-dom-渲染"}},[t._v("#")]),t._v(" css 阻塞 dom 渲染")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("默认情况下，css 被视为阻塞 dom 渲染的资源，这意味着浏览器直至 cssom 构建完毕之前将不会渲染任何已处理的内容，毕竟渲染树也依赖于 cssom 树。")])]),t._v(" "),a("li",[a("p",[t._v("这也是为什么我们把样式放在 HTML 内容之前，以防止被呈现内容发生样式跳动。 当然代价就是显示延迟，所以性能攸关的站点都会内联所有 CSS")])])]),t._v(" "),a("h3",{attrs:{id:"动态插入-js-和-css-时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态插入-js-和-css-时"}},[t._v("#")]),t._v(" 动态插入 js 和 css 时")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("动态插入的外部样式表或脚本不会阻塞 dom 解析或渲染。")])]),t._v(" "),a("li",[a("p",[t._v("动态插入的内联样式表或脚本会阻塞 dom 解析和渲染。")])]),t._v(" "),a("li",[a("p",[t._v("未加入到 dom 结构的样式表或脚本（外部或内联）不会被下载、解析或执行（"),a("code",[t._v("Image.src")]),t._v(" 是特例）。")])]),t._v(" "),a("li",[a("p",[t._v("使用 "),a("code",[t._v("innerHTML")]),t._v(" 引入 "),a("code",[t._v("script")]),t._v(" 标签，其中的 js 不会执行，但 link 标签会起作用。")])])]),t._v(" "),a("h3",{attrs:{id:"改变-js-阻塞的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改变-js-阻塞的方式"}},[t._v("#")]),t._v(" 改变 js 阻塞的方式")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("defer")]),t._v(" 是渲染完再执行，"),a("code",[t._v("async")]),t._v(" 是下载完就执行(即不能保证执行顺序)。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("defer")]),t._v(" 相比普通 "),a("code",[t._v("script")]),t._v("，有两点区别——载入 js 文件时不阻塞 html 的解析，执行阶段被放到 html 标签解析完成之后。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("async")]),t._v(" 加载的 js 依然会阻塞 "),a("code",[t._v("load")]),t._v(" 事件。换句话说，"),a("code",[t._v("async-script")]),t._v(" 可能在 "),a("code",[t._v("DOMContentLoaded")]),t._v(" 触发之前或之后执行，但一定在 load 触发之前执行。")])]),t._v(" "),a("li",[a("p",[t._v("两者只在外链 js 中有效，并且使用 "),a("code",[t._v("document.createElement")]),t._v(" 创建的 "),a("code",[t._v("script")]),t._v(" 默认是 "),a("code",[t._v("async")]),t._v(" 的。")])])]),t._v(" "),a("h3",{attrs:{id:"渲染图层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染图层"}},[t._v("#")]),t._v(" 渲染图层")]),t._v(" "),a("h4",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("浏览器渲染的图层一般包含两大类：普通图层以及复合图层。")])]),t._v(" "),a("li",[a("p",[t._v("首先，普通文档流内可以理解为一个复合图层，这里称为默认复合层，里面不管添加多少元素，其实都是在同一个复合图层中。")])]),t._v(" "),a("li",[a("p",[t._v("其次，"),a("code",[t._v("absolute")]),t._v(" 布局（"),a("code",[t._v("fixed")]),t._v(" 也一样），虽然可以脱离普通文档流，但它仍然属于默认复合层。")])]),t._v(" "),a("li",[a("p",[t._v("然后，可以通过硬件加速的方式，声明一个新的复合图层，它会单独分配资源 （当然也会脱离普通文档流，这样一来，不管这个复合图层中怎么变化，也不会影响默认复合层里的回流重绘）。")])]),t._v(" "),a("li",[a("p",[t._v("可以简单地理解为，GPU 中各个复合图层是单独绘制的，所以互不影响，这也是为什么某些场景硬件加速效果一级棒。")])])]),t._v(" "),a("h4",{attrs:{id:"absolute-和硬件加速的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#absolute-和硬件加速的区别"}},[t._v("#")]),t._v(" absolute 和硬件加速的区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("需要强调的是，"),a("code",[t._v("absolute")]),t._v(" 虽然可以脱离普通文档流，但是无法脱离默认复合层。 所以，就算 "),a("code",[t._v("absolute")]),t._v(" 中信息改变时不会改变普通文档流中 render 树， 但是，浏览器最终绘制时，是整个复合层绘制的，所以 "),a("code",[t._v("absolute")]),t._v(" 中信息的改变，仍然会影响整个复合层的绘制（浏览器会重绘它，如果复合层中内容多，"),a("code",[t._v("absolute")]),t._v(" 带来的绘制信息变化过大，资源消耗是非常严重的）。")])]),t._v(" "),a("li",[a("p",[t._v("硬件加速直接就是在另一个复合层了，相当于另起炉灶，所以它的信息改变不会影响默认复合层 （当然了，内部肯定会影响属于自己的复合层），仅仅是引发最后的合成（输出视图）")])])]),t._v(" "),a("h4",{attrs:{id:"复合图层的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复合图层的作用"}},[t._v("#")]),t._v(" 复合图层的作用")]),t._v(" "),a("ul",[a("li",[t._v("一般一个元素开启硬件加速后会变成复合图层，可以独立于普通文档流中，改动后可以避免整个页面重绘，提升性能。但是尽量不要大量使用复合图层，否则由于资源消耗过度，页面反而会变的更卡")])]),t._v(" "),a("h4",{attrs:{id:"如何变成复合图层-硬件加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何变成复合图层-硬件加速"}},[t._v("#")]),t._v(" 如何变成复合图层（硬件加速）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("最常用的方式："),a("code",[t._v("translate3d、translateZ")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("opacity")]),t._v(" 属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("will-chang")]),t._v(" 属性（这个比较偏僻），一般配合"),a("code",[t._v("opacity")]),t._v(" 与 "),a("code",[t._v("translate")]),t._v(" 使用（而且经测试，除了上述可以引发硬件加速的属性外，其它属性并不会变成复合层）， 作用是提前告诉浏览器要变化，这样浏览器会开始做一些优化工作（这个最好用完后就释放）")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<video><iframe><canvas><webgl>")]),t._v("等元素")])])]),t._v(" "),a("h4",{attrs:{id:"硬件加速时请使用-z-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件加速时请使用-z-index"}},[t._v("#")]),t._v(" 硬件加速时请使用 z-index")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用硬件加速时，尽可能的使用 "),a("code",[t._v("z-index")]),t._v("，防止浏览器默认给后续的元素创建复合层渲染")])]),t._v(" "),a("li",[a("p",[t._v("具体的原理时这样的： "),a("code",[t._v("webkit CSS3")]),t._v(" 中，如果这个元素添加了硬件加速，并且 "),a("code",[t._v("z-index")]),t._v(" 层级比较低， 那么在这个元素的后面其它元素（层级比这个元素高的，或者相同的，并且 "),a("code",[t._v("releative")]),t._v(" 或 "),a("code",[t._v("absolute")]),t._v(" 属性相同的）， 会默认变为复合层渲染，如果处理不当会极大的影响性能")])]),t._v(" "),a("li",[a("p",[t._v("简单点理解，其实可以认为是一个隐式合成的概念：如果 a 是一个复合图层，而且 b 在 a 上面，那么 b 也会被隐式转为一个复合图层，这点需要特别注意")])])]),t._v(" "),a("h2",{attrs:{id:"优化手段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化手段"}},[t._v("#")]),t._v(" 优化手段")]),t._v(" "),a("h3",{attrs:{id:"针对-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对-html"}},[t._v("#")]),t._v(" 针对 html")]),t._v(" "),a("ul",[a("li",[t._v("html 文档结构层次尽量少，最好不深于 6 层")]),t._v(" "),a("li",[t._v("首屏 html 可以少量，主体结构动态插入")])]),t._v(" "),a("h3",{attrs:{id:"针对-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对-css"}},[t._v("#")]),t._v(" 针对 css")]),t._v(" "),a("ul",[a("li",[t._v("使用媒体查询，减少初次 cssom 树的构建量")]),t._v(" "),a("li",[t._v("尽量用 id 和 class，不要过渡层叠")]),t._v(" "),a("li",[t._v("样式结构层次尽量简单")])]),t._v(" "),a("h3",{attrs:{id:"针对-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对-js"}},[t._v("#")]),t._v(" 针对 js")]),t._v(" "),a("ul",[a("li",[t._v("使用 defer 和 async，避免对文档的阻塞")]),t._v(" "),a("li",[t._v("可以的话，动态插入 js，避免阻塞")])]),t._v(" "),a("h3",{attrs:{id:"针对引入位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对引入位置"}},[t._v("#")]),t._v(" 针对引入位置")]),t._v(" "),a("ul",[a("li",[t._v("css 放到 head，让 cssom 树先行构建；js 放到"),a("code",[t._v("</body>")]),t._v("前，保证 dom 树先行构建，不被阻塞")]),t._v(" "),a("li",[t._v("避免 js 文件的插入跟在 css 文件之后，避免 css 解析对 js 执行的延迟，造成阻塞")])]),t._v(" "),a("h3",{attrs:{id:"针对资源载入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对资源载入"}},[t._v("#")]),t._v(" 针对资源载入")]),t._v(" "),a("ul",[a("li",[t._v("对页面资源进行压缩，对传输进行 gzip 压缩")]),t._v(" "),a("li",[t._v("利用 link 标签的 rel 属性进行预解析，运用 http 缓存")])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://blog.codingplayboy.com/2017/03/29/webpage_render/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://blog.codingplayboy.com/2017/03/29/webpage_render/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://web.jobbole.com/92765/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://web.jobbole.com/92765/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5a8e242c5188257a6b060000",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5a8e242c5188257a6b060000"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/59d489156fb9a00a571d6509",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/59d489156fb9a00a571d6509"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://kb.cnblogs.com/page/534571/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kb.cnblogs.com/page/534571/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/59c60691518825396f4f71a1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/59c60691518825396f4f71a1"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://harttle.land/2016/11/26/dynamic-dom-render-blocking.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://harttle.land/2016/11/26/dynamic-dom-render-blocking.html"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.dailichun.com/2018/01/21/js_singlethread_eventloop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.dailichun.com/2018/01/21/js_singlethread_eventloop.html"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.xuecaijie.com/it/157.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.xuecaijie.com/it/157.html"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);