(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{425:function(v,_,t){"use strict";t.r(_);var a=t(16),i=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"《高性能-javascript》"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#《高性能-javascript》"}},[v._v("#")]),v._v(" 《高性能 javascript》")]),v._v(" "),_("blockquote",[_("p",[v._v("阅读《高性能 javascript》后，对其内容的一个整理和精简")])]),v._v(" "),_("h2",{attrs:{id:"加载与执行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加载与执行"}},[v._v("#")]),v._v(" 加载与执行")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("将 script 标签放在 body 结尾标签上面")])]),v._v(" "),_("li",[_("p",[v._v("控制 script 标签数量（"),_("strong",[v._v("每一次 script 解析都意味着阻塞或延迟")]),v._v("）")])]),v._v(" "),_("li",[_("p",[v._v("内嵌脚本不要放在 link 样式之后")])]),v._v(" "),_("li",[_("p",[v._v("对 script 标签应用 defer 属性")])]),v._v(" "),_("li",[_("p",[v._v("动态创建 script 标签加载 js 文件")])])]),v._v(" "),_("h2",{attrs:{id:"数据存取"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据存取"}},[v._v("#")]),v._v(" 数据存取")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("不影响 this 的情况下，对反复访问的对象进行变量保存")])]),v._v(" "),_("li",[_("p",[v._v("合理使用局部变量，减少作用域跨越")])]),v._v(" "),_("li",[_("p",[v._v("避免使用 with 和 eval")])]),v._v(" "),_("li",[_("p",[v._v("谨慎地使用闭包")])]),v._v(" "),_("li",[_("p",[v._v("减少 Object 对象的层次访问，避免过长的属性读取（es6 解构赋值）")])])]),v._v(" "),_("h2",{attrs:{id:"dom-编程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dom-编程"}},[v._v("#")]),v._v(" DOM 编程")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("尽量用新的选择器 api 代替老的，尽量用 dom 克隆替代 dom 创建")])]),v._v(" "),_("li",[_("p",[v._v("html 集合操作非常昂贵，可转换为数组再进行操作，同时使用局部变量缓存操作")])]),v._v(" "),_("li",[_("p",[v._v("对 dom 访问信息进行缓存，对 dom 改变进行批量操作")])]),v._v(" "),_("li",[_("p",[v._v("对操作频繁的 dom，尽可能采用 "),_("code",[v._v("position:absolute")])])]),v._v(" "),_("li",[_("p",[v._v("对操作密集的 dom，先 "),_("code",[v._v("display:none")]),v._v("——>操作——>再 "),_("code",[v._v("display:block")])])]),v._v(" "),_("li",[_("p",[v._v("对操作量很大的 dom，采用文档碎片 "),_("code",[v._v("createDocumentFragment")])])]),v._v(" "),_("li",[_("p",[v._v("合理使用事件委托，避免对 dom 进行逐个事件绑定")])])]),v._v(" "),_("h2",{attrs:{id:"算法和流程控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#算法和流程控制"}},[v._v("#")]),v._v(" 算法和流程控制")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("减少使用 "),_("code",[v._v("for...in")]),v._v(" 循环")])]),v._v(" "),_("li",[_("p",[v._v("条件判断上，避免类型转换")])]),v._v(" "),_("li",[_("p",[v._v("条件较多时，使用 switch 代替 "),_("code",[v._v("if..else")])])]),v._v(" "),_("li",[_("p",[v._v("最小化语句数，避免多个 var 声明，插入迭代值——"),_("code",[v._v("arr[i++]")])])]),v._v(" "),_("li",[_("p",[v._v("简化终止条件，简化循环体，减值迭代")])]),v._v(" "),_("li",[_("p",[v._v("展开循环（在次数不多的情况下）")])])]),v._v(" "),_("h2",{attrs:{id:"字符串与正则表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符串与正则表达式"}},[v._v("#")]),v._v(" 字符串与正则表达式")]),v._v(" "),_("ol",[_("li",[_("p",[v._v('减少字符串拼接，避免"临时字符串"的出现')])]),v._v(" "),_("li",[_("p",[v._v("当叠加字符串的时候，字符串变量应该靠左")])]),v._v(" "),_("li",[_("p",[v._v("数组 join 方法比其他字符串连接方式慢")])]),v._v(" "),_("li",[_("p",[v._v("字符串 concat 方法比使用简单的+和+=慢")])]),v._v(" "),_("li",[_("p",[v._v("正则优化（个人略过...）")])])]),v._v(" "),_("h2",{attrs:{id:"快速响应的用户界面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速响应的用户界面"}},[v._v("#")]),v._v(" 快速响应的用户界面")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("对于异步操作的任务，可使用定时器分解任务，分割循环项")])]),v._v(" "),_("li",[_("p",[v._v("定时器最小延迟建议为 25 毫秒，应避免高频定时器的数量")])]),v._v(" "),_("li",[_("p",[v._v("合理使用 web workers")])])]),v._v(" "),_("h2",{attrs:{id:"ajax"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[v._v("#")]),v._v(" Ajax")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("对那些不会改变服务器状态，只获取数据的请求，应该使用 get 类型（会被游览器缓存起来，有利于性能）")])]),v._v(" "),_("li",[_("p",[v._v("如果你只关心发送数据到服务器，可以使用图标信标（"),_("code",[v._v('img.src="请求地址"')]),v._v("）")])]),v._v(" "),_("li",[_("p",[v._v("使用能被 http 缓存的 get 查询请求的时候，应该同时在服务端设置 Expires 头信息（过期时间）")])]),v._v(" "),_("li",[_("p",[v._v("本地设置缓存（变量缓存与 storage 缓存）")])])]),v._v(" "),_("h2",{attrs:{id:"编程实践"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编程实践"}},[v._v("#")]),v._v(" 编程实践")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("避免使用 "),_("code",[v._v("eval, Function, setTimeout")]),v._v(" 和 "),_("code",[v._v("setInterval")]),v._v(" 去执行需要解析的字符串代码")])]),v._v(" "),_("li",[_("p",[v._v("对数组和对象使用字面量进行创建，而非构造器模式")])]),v._v(" "),_("li",[_("p",[v._v("涉及计算的过程，应该尽量用原生方法（Math），合理使用位运算符")])])]),v._v(" "),_("h2",{attrs:{id:"构建并部署高性能-javascript-应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建并部署高性能-javascript-应用"}},[v._v("#")]),v._v(" 构建并部署高性能 javascript 应用")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("合并 js，减少 http 请求")])]),v._v(" "),_("li",[_("p",[v._v("压缩 js，降低请求大小")])]),v._v(" "),_("li",[_("p",[v._v("设置 Accept-Encoding HTTP 请求头，对 js 进行 gzip 压缩")])]),v._v(" "),_("li",[_("p",[v._v("设置 Expires HTTP 响应头，对 js 文件进行过期时间缓存（客户端使用时间戳更新 js 文件）")])]),v._v(" "),_("li",[_("p",[v._v("使用内容分发网络 CDN")])])]),v._v(" "),_("h2",{attrs:{id:"工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[v._v("#")]),v._v(" 工具")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("javascript 的性能分析简单的分析可以通过 Date 日期函数，推荐使用当前的集成测试和单元测试")])]),v._v(" "),_("li",[_("p",[v._v("每个游览器都具备各种的检查器和资源面板，可以通过分析得出一些 javascript 性能的数据")])])])])}),[],!1,null,null,null);_.default=i.exports}}]);