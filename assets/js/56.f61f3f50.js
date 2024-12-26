(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{428:function(t,a,s){"use strict";s.r(a);var r=s(16),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《你不知道的-javascript-上-》"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《你不知道的-javascript-上-》"}},[t._v("#")]),t._v(" 《你不知道的 javascript（上）》")]),t._v(" "),a("h2",{attrs:{id:"作用域是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域是什么"}},[t._v("#")]),t._v(" 作用域是什么")]),t._v(" "),a("h3",{attrs:{id:"编译原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译原理"}},[t._v("#")]),t._v(" 编译原理")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("分词/词法分析")]),t._v(" "),a("ul",[a("li",[t._v("这个过程会将由字符组成的字符串分解成（对编程语言来说）有意义的代码块，这些代码块被称为词法单元")])])]),t._v(" "),a("li",[a("p",[t._v("解析/语法分析")]),t._v(" "),a("ul",[a("li",[t._v("词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树(抽象语法树 AST)")])])]),t._v(" "),a("li",[a("p",[t._v("代码生成")]),t._v(" "),a("ul",[a("li",[t._v("将 AST 转换为可执行代码的过程称被称为代码生成")])])])]),t._v(" "),a("h3",{attrs:{id:"理解作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理解作用域"}},[t._v("#")]),t._v(" 理解作用域")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("处理成员")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("引擎——负责代码编译和执行")])]),t._v(" "),a("li",[a("p",[t._v("编译器——词法-语法-代码生成")])]),t._v(" "),a("li",[a("p",[t._v("作用域——根据名称查找变量的一套规则")])])])]),t._v(" "),a("li",[a("p",[t._v("引擎查询(代码执行前)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一个赋值操作的 LHS(左侧)和 RHS(右侧)查询")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LHS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a，"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RHS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LHS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("无，"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RHS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("log和a\n")])])])]),t._v(" "),a("li",[a("p",[t._v("如果查找的目的是对变量进行赋值，就会使用 LHS 查询")])]),t._v(" "),a("li",[a("p",[t._v("如果查找的目的是获取变量的值，就会使用 RHS 查询")])])])])]),t._v(" "),a("h2",{attrs:{id:"词法作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[t._v("#")]),t._v(" 词法作用域")]),t._v(" "),a("h3",{attrs:{id:"词法阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法阶段"}},[t._v("#")]),t._v(" 词法阶段")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("定义在词法阶段的作用域，由你在写代码时将变量和块作用域写在哪里来决定的，执行时不变，因此该词法作用域属于静态作用域(相对于动态作用域)")])]),t._v(" "),a("li",[a("p",[t._v("无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被创建时所处的位置决定")])]),t._v(" "),a("li",[a("p",[t._v("词法作用域是在写代码或者说定义时确定的，而动态作用域是在运行时确定的(javascript 的 this 也是)")])]),t._v(" "),a("li",[a("p",[t._v("词法作用域关注函数在何处声明，而动态作用域关注函数从何处调用")])])]),t._v(" "),a("h3",{attrs:{id:"欺骗词法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#欺骗词法"}},[t._v("#")]),t._v(" 欺骗词法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("eval——修改词法")])]),t._v(" "),a("li",[a("p",[t._v("with——创建词法")])]),t._v(" "),a("li",[a("p",[t._v("性能")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("处于运行时才确定的 eval 和 with 的使用会导致代码运行变慢")])]),t._v(" "),a("li",[a("p",[t._v("引擎无法在编译时对其作用域查找进行优化，因此只能谨慎地认为这样的优化是无效的")])])])])]),t._v(" "),a("h2",{attrs:{id:"函数作用域和块作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域和块作用域"}},[t._v("#")]),t._v(" 函数作用域和块作用域")]),t._v(" "),a("h3",{attrs:{id:"块作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块作用域"}},[t._v("#")]),t._v(" 块作用域")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("with")]),t._v("：用 with 从对象中创建出的作用域仅在 with 声明中而非外部作用域中有效")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("try/catch")]),t._v("：try/catch 的 catch 分句会创建一个块作用域，其中声明的变量仅在 catch 内部有效(性能糟糕）")])]),t._v(" "),a("li",[a("p",[t._v("ps: 任何声明在某个作用域内的变量，都将附属于这个作用域")])])]),t._v(" "),a("h2",{attrs:{id:"提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提升"}},[t._v("#")]),t._v(" 提升")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("js 引擎会将"),a("code",[t._v("var a = 2")]),t._v("当作两个单独的声明")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第一个是编译阶段的任务(var a=undefined)")])]),t._v(" "),a("li",[a("p",[t._v("第二个则是执行阶段的任务(a=2)")])])])])]),t._v(" "),a("h2",{attrs:{id:"作用域闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域闭包"}},[t._v("#")]),t._v(" 作用域闭包")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在自身的作用域外被调用并使得作用域和活动对象被保存的现象")])]),t._v(" "),a("li",[a("p",[t._v("无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用")])]),t._v(" "),a("li",[a("p",[t._v("es6 中模块文件中的内容会被当作好像包含在作用域闭包中一样来处理")])])]),t._v(" "),a("h2",{attrs:{id:"关于-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-this"}},[t._v("#")]),t._v(" 关于 this")]),t._v(" "),a("ul",[a("li",[t._v("this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件")])]),t._v(" "),a("h2",{attrs:{id:"this-全面解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-全面解析"}},[t._v("#")]),t._v(" this 全面解析")]),t._v(" "),a("h3",{attrs:{id:"绑定规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定规则"}},[t._v("#")]),t._v(" 绑定规则")]),t._v(" "),a("ul",[a("li",[t._v("默认绑定，隐式绑定，显式绑定和 new 绑定")])]),t._v(" "),a("h3",{attrs:{id:"优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),a("ul",[a("li",[t._v("new 绑定 => 显示绑定 => 隐式绑定 => 默认绑定")])]),t._v(" "),a("h3",{attrs:{id:"bind-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bind-函数"}},[t._v("#")]),t._v(" bind 函数")]),t._v(" "),a("ul",[a("li",[t._v("用于改变作用域和传入预定参数(柯里化的一种)")])]),t._v(" "),a("h2",{attrs:{id:"对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[t._v("#")]),t._v(" 对象")]),t._v(" "),a("h3",{attrs:{id:"浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝"}},[t._v("#")]),t._v(" 浅拷贝")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("目标对象，源对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"属性描述符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性描述符"}},[t._v("#")]),t._v(" 属性描述符")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\twritable\t\t\t\t            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否可写")]),t._v("\n\tenumerable\t\t\t\t            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否可枚举")]),t._v("\n\tconfigurable\t\t\t            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否可配置")]),t._v("\n     \tObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventExtensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不能增加&&不能修改")]),t._v("\n     \tObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不能增加&&不能修改&&不能配置&&不能删除")]),t._v("\n    \tObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不能增加&&不能修改&&不能配置&&不能删除&&不能访问&&不能遍历")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ps")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("特性值操作只会影响对象的直接属性，不会影响其引用对象的属性\n")])])]),a("h3",{attrs:{id:"访问描述符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问描述符"}},[t._v("#")]),t._v(" 访问描述符")]),t._v(" "),a("ul",[a("li",[t._v("当使用 getter 和 setter 时，会忽略对象的 value 和 writable 特性")])]),t._v(" "),a("h3",{attrs:{id:"存在性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存在性"}},[t._v("#")]),t._v(" 存在性")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("判断对象中是否存在对应的属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法一")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 属性名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法二")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历"}},[t._v("#")]),t._v(" 遍历")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对象")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("for..in")]),t._v("——进行对象遍历的时候，因游览器差异，顺序是不可靠的")])])]),t._v(" "),a("li",[a("p",[t._v("数组")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("for..of")]),t._v("——通过调用迭代器对象，然后调用迭代器对象的 next()方法进行遍历")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组有内置的@@iterator ，因此for..of可以直接应用在数组上")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 数组的迭代器对象通过"arr[Symbol.iterator]()"进行获取')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象进行for..of操作的变通方法")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"混合对象-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合对象-类"}},[t._v("#")]),t._v(' 混合对象"类"')]),t._v(" "),a("ul",[a("li",[a("p",[t._v("类意味着复制")])]),t._v(" "),a("li",[a("p",[t._v("传统的类被实例化时，它的行为会被复制到实例中;类被继承时，行为也会被复制到子类中")])]),t._v(" "),a("li",[a("p",[t._v("多态——在继承链的不同层次名称相同但是功能不同的函数")]),t._v(" "),a("ul",[a("li",[t._v("看起来似乎是从子类引用父类，但是本质上引用的其实是复制的结果")])])]),t._v(" "),a("li",[a("p",[t._v("JavaScript 也有类似的语法，但是和其他语言中的类完全不同;JavaScript 并不会(像类那样)自动创建对象的副本")])]),t._v(" "),a("li",[a("p",[t._v("混入模式（显式/隐式）可以用来模拟类的复制行为，但是通常会产生丑陋并且脆弱的语法，比如显式伪多态"),a("code",[t._v("(OtherObj.methodName.call(this,...))")]),t._v("，这会让代码更加难懂并且难以维护")])])]),t._v(" "),a("h2",{attrs:{id:"原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),a("h3",{attrs:{id:"prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" Prototype")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果原型链父级的属性被设置为只读，则实例对象无法创建屏蔽属性 （通过 Object.defineProperty()可以）")])]),t._v(" "),a("li",[a("p",[t._v("如果原型链父级的属性被设为 setter 属性，则实例对象的赋值和更改操作都会自动延用原型链上的 setter 属性，体现为\n实例属性本身的赋值或更改无效，除非 setter 属性方法下存在赋值操作 （通过 Object.defineProperty()可以）")])])]),t._v(" "),a("h3",{attrs:{id:"原型继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型继承"}},[t._v("#")]),t._v(" 原型继承")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("真正的类继承是会进行对象复制的，但是 javascript 的继承本质是原型委托，通过原型来进行对象的关联")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Object.setPrototypeOf(对象，被继承的原型)")])])])]),t._v(" "),a("h2",{attrs:{id:"行为委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行为委托"}},[t._v("#")]),t._v(" 行为委托")]),t._v(" "),a("h3",{attrs:{id:"对象关联·行为委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象关联·行为委托"}},[t._v("#")]),t._v(" 对象关联·行为委托")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("行为委托认为对象之间是兄弟关系，互相委托，而不是父类和子类的关系")])]),t._v(" "),a("li",[a("p",[t._v("通过在两个对象之间使用 Object.create(对象)来实现行为委托，这种模式只需要两个实体，而且可以互为关联")])]),t._v(" "),a("li",[a("p",[t._v("只需要集中在对象之间的关联关系，可以更好地支持关注分离原则，创建和初始化并不需要合并为一个步骤(相比 new 函数)")])]),t._v(" "),a("li",[a("p",[t._v("除了能让代码看起来更简洁，更具扩展性外，还可以简化代码结构")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* .. */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父类")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继承父类")]),t._v("\nBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fnA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 书写子类")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取子类实例")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"内省检测·检查-类-关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内省检测·检查-类-关系"}},[t._v("#")]),t._v(" 内省检测·检查“类”关系")]),t._v(" "),a("ul",[a("li",[t._v("方法 1 => "),a("code",[t._v("A.isPrototypeOf(b)")])]),t._v(" "),a("li",[t._v("方法 2 => "),a("code",[t._v("Object.getPrototypeOf(a)===A.prototype")])]),t._v(" "),a("li",[t._v("方法 3 => "),a("code",[t._v("a.__proto__=== A.prototype")])]),t._v(" "),a("li",[t._v("方法 4 => "),a("code",[t._v("a instansof A")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);