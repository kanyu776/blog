(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{425:function(v,_,t){"use strict";t.r(_);var l=t(16),a=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"《javascript-正则表达式迷你书》"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#《javascript-正则表达式迷你书》"}},[v._v("#")]),v._v(" 《javascript 正则表达式迷你书》")]),v._v(" "),_("h2",{attrs:{id:"字符匹配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符匹配"}},[v._v("#")]),v._v(" 字符匹配")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("横向匹配——通过量词")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("贪婪匹配 "),_("code",[v._v("{m,n} {m,} {m} ? + *")])])]),v._v(" "),_("li",[_("p",[v._v("惰性匹配 后面跟"),_("code",[v._v("?")]),v._v("号")])])])]),v._v(" "),_("li",[_("p",[v._v("纵向匹配——通过字符组")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("\\d \\D \\w \\W \\s \\S .")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("\\w")]),v._v(" 表示"),_("code",[v._v("[0-9a-zA-Z_]")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("\\W")]),v._v(" 表示"),_("code",[v._v("[^0-9a-za-z_]")])])])])]),v._v(" "),_("li",[_("p",[v._v("分支结构——通过管道符"),_("code",[v._v("|")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("匹配模式也是"),_("strong",[v._v("惰性的")])])]),v._v(" "),_("li",[_("p",[v._v("当前面的分支匹配上了这个位置的字符，后面的分支就不再尝试，整个匹配从这个位置往后继续进行")])])])])]),v._v(" "),_("h2",{attrs:{id:"位置匹配攻略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#位置匹配攻略"}},[v._v("#")]),v._v(" 位置匹配攻略")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("匹配位置")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("^ \\$ \\b \\B (?=p) (?!p)")])])])]),v._v(" "),_("li",[_("p",[v._v("位置的特性")]),v._v(" "),_("ul",[_("li",[v._v('对于位置的理解，我们可以理解成空字符""')])])])]),v._v(" "),_("h2",{attrs:{id:"括号的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#括号的作用"}},[v._v("#")]),v._v(" 括号的作用")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("描述")]),v._v(" "),_("ul",[_("li",[v._v("强调括号内的正则是一个整体，提供了可供我们使用的分组，即提供了子表达式")])])]),v._v(" "),_("li",[_("p",[v._v("分组引用")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("需配合使用运行时的环境 API 来使用")]),v._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[v._v("str"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("match")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("reg"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\t\t    ——通过结果数组大于"),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("0")]),v._v("的下标来获取\nreg"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("exec")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("string"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\t\t——通过结果数组大于"),_("span",{pre:!0,attrs:{class:"token number"}},[v._v("0")]),v._v("的下标来获取\nstr"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("replace")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("regex"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),_("span",{pre:!0,attrs:{class:"token string"}},[v._v('"$1"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\t——通过replace提供的$1，$2，$3"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("...")]),v._v("来获取捕获的分组\n")])])])])])]),v._v(" "),_("li",[_("p",[v._v("反向引用")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("在正则本身里引用分组的方式,通过"),_("code",[v._v("\\1，\\2，\\3...")]),v._v("来引用分组内容")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("括号嵌套 ——从外到内，从左到右")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("\\10")]),v._v(" ——代表捕获的第 10 个分组")])]),v._v(" "),_("li",[_("p",[v._v('引用不存在的分组 ——代表"\\数字"')])]),v._v(" "),_("li",[_("p",[v._v("分组后有量词 ——捕获最后的匹配")])])])])])]),v._v(" "),_("li",[_("p",[v._v("非捕获括号")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("不被捕获的分组形式")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("(?:字符)")])]),v._v(" "),_("li",[_("p",[v._v("(?:字符 1|字符 2|字符 3..)")])])])])])])]),v._v(" "),_("h2",{attrs:{id:"回溯法原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回溯法原理"}},[v._v("#")]),v._v(" 回溯法原理")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("没有回溯的匹配")]),v._v(" "),_("ul",[_("li",[v._v("一次匹配到位")])])]),v._v(" "),_("li",[_("p",[v._v("有回溯的匹配")]),v._v(" "),_("ul",[_("li",[v._v('一次匹配不行，就"退一步"，再进行匹配，循环往复')])])]),v._v(" "),_("li",[_("p",[v._v("常见的回溯形式")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("贪婪量词")])]),v._v(" "),_("li",[_("p",[v._v("惰性量词")])]),v._v(" "),_("li",[_("p",[v._v("分支结构")])])])])]),v._v(" "),_("h2",{attrs:{id:"正则的拆分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则的拆分"}},[v._v("#")]),v._v(" 正则的拆分")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("编程语言都有操作符，正则表达式中的操作符则体现在结构中")])]),v._v(" "),_("li",[_("p",[v._v("结构")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("字符本身")])]),v._v(" "),_("li",[_("p",[v._v("字符组")])]),v._v(" "),_("li",[_("p",[v._v("量词")])]),v._v(" "),_("li",[_("p",[v._v("锚(位置)")])]),v._v(" "),_("li",[_("p",[v._v("分组")])]),v._v(" "),_("li",[_("p",[v._v("选择分支")])]),v._v(" "),_("li",[_("p",[v._v("反向引用")])])])]),v._v(" "),_("li",[_("p",[v._v("操作符的优先级")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("1 => "),_("code",[v._v("\\")])])]),v._v(" "),_("li",[_("p",[v._v("2 => "),_("code",[v._v("(…)、(?:…)、(?=…)、(?!…)、[…]")])])]),v._v(" "),_("li",[_("p",[v._v("3 => "),_("code",[v._v("{m}、{m,n}、{m,}、?、\\*、+")])])]),v._v(" "),_("li",[_("p",[v._v("4 => "),_("code",[v._v("^、\\$、\\")]),v._v("元字符、一般字符")])]),v._v(" "),_("li",[_("p",[v._v("5 => "),_("code",[v._v("|")])])])])]),v._v(" "),_("li",[_("p",[v._v("注意点")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("匹配字符串整体问题——如果存在位置锚，可以通过分组括号进行操作优先级的改变，比如^和$")])]),v._v(" "),_("li",[_("p",[v._v("量词连缀问题——如果存在量词连缀，可以通过分组括号分割，避免报错")])]),v._v(" "),_("li",[_("p",[v._v("元字符转义问题——需要转义的时候最好都转义")])])])])]),v._v(" "),_("h2",{attrs:{id:"正则的构建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则的构建"}},[v._v("#")]),v._v(" 正则的构建")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("平衡法则")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("匹配预期的字符串")])]),v._v(" "),_("li",[_("p",[v._v("不匹配非预期的字符串")])]),v._v(" "),_("li",[_("p",[v._v("可读性和可维护性")])]),v._v(" "),_("li",[_("p",[v._v("效率")])])])]),v._v(" "),_("li",[_("p",[v._v("构建前提")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("是否适合")])]),v._v(" "),_("li",[_("p",[v._v("是否必要")])]),v._v(" "),_("li",[_("p",[v._v("是否需要复杂的正则（可拆分）")])])])]),v._v(" "),_("li",[_("p",[v._v("准确性")]),v._v(" "),_("ul",[_("li",[v._v("确定匹配目标的所有模式规则，进行拆分，提取和分组")])])]),v._v(" "),_("li",[_("p",[v._v("效率")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("（减少回溯）明确字符组，避免模糊匹配")])]),v._v(" "),_("li",[_("p",[v._v("（节省内存）如果不需要利用捕获组，应该使用非捕获型分组")])]),v._v(" "),_("li",[_("p",[v._v("（加快移位速度）独立出确定字符")])]),v._v(" "),_("li",[_("p",[v._v("（消除重复）提取分支公共部分")])]),v._v(" "),_("li",[_("p",[v._v("（减少回溯）控制分支的数量")])])])])]),v._v(" "),_("h2",{attrs:{id:"正则的编程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则的编程"}},[v._v("#")]),v._v(" 正则的编程")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("四种操作")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("验证")])]),v._v(" "),_("li",[_("p",[v._v("切分")])]),v._v(" "),_("li",[_("p",[v._v("提取")])]),v._v(" "),_("li",[_("p",[v._v("替换")])])])]),v._v(" "),_("li",[_("p",[v._v("相关 api")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("String——search")])]),v._v(" "),_("li",[_("p",[v._v("String——split")])]),v._v(" "),_("li",[_("p",[v._v("String——match")])]),v._v(" "),_("li",[_("p",[v._v("String——replace")])]),v._v(" "),_("li",[_("p",[v._v("RegExp——test")])]),v._v(" "),_("li",[_("p",[v._v("RegExp——exec")])])])]),v._v(" "),_("li",[_("p",[v._v("注意点")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("字符串的split方法，第2个参数可以限定结果数组的长度")])]),v._v(" "),_("li",[_("p",[v._v("字符串的split方法，利用正则匹配并使用了分组时，结果数组中会包含分组字符")])]),v._v(" "),_("li",[_("p",[v._v("字符串的search和match方法，会把字符串自动转为正则")])]),v._v(" "),_("li",[_("p",[v._v("字符串的macth方法，不带g，返回标准内容，带g，返回全部匹配内容")])]),v._v(" "),_("li",[_("p",[v._v("正则的exec方法，始终返回标准内容，不受是否带g的影响")])]),v._v(" "),_("li",[_("p",[v._v("正则的exec方法，每次调用只会匹配一个，可以连续匹配，匹配不到后会重置索引")])]),v._v(" "),_("li",[_("p",[v._v("正则的test方法，默认是部分匹配，如需整体匹配，需要加^和$限定")])]),v._v(" "),_("li",[_("p",[v._v("正则的exec和test方法，带g时，会修改lastIndex，其他情况都不会影响lastIndex")])]),v._v(" "),_("li",[_("p",[v._v('使用构造函数用法时，对于元字符和转义字符需要再多加一个斜杠""')])])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);