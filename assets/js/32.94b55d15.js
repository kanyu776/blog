(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{401:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"npm-相关知识整理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-相关知识整理"}},[s._v("#")]),s._v(" npm 相关知识整理")]),s._v(" "),t("h2",{attrs:{id:"语义化版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语义化版本"}},[s._v("#")]),s._v(" 语义化版本")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("major: 重大变化，不兼容老版本")])]),s._v(" "),t("li",[t("p",[s._v("minor: 新增功能，兼容老版本")])]),s._v(" "),t("li",[t("p",[s._v("patch: 修复 bug，兼容老版本")])])]),s._v(" "),t("h2",{attrs:{id:"依赖版本号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖版本号"}},[s._v("#")]),s._v(" 依赖版本号")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("* 匹配最新版本的依赖")])]),s._v(" "),t("li",[t("p",[s._v("^ 匹配最近的大版本依赖，比如^1.2.3，会匹配所有 1.x.x 的包，不包括 2.0.0")])]),s._v(" "),t("li",[t("p",[s._v("~ 会匹配最近的小版本依赖，比如~1.2.3，会匹配所有 1.2.x 版本，不包括 1.3.0")])])]),s._v(" "),t("h2",{attrs:{id:"package-入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-入口"}},[s._v("#")]),s._v(" package 入口")]),s._v(" "),t("p",[s._v("如果使用 import 对库进行导入，会优先寻找 module 字段引入，然后才是 main 字段。")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"midash"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./dist/index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// es module入口")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./dist/index.mjs"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// commonjs入口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"package-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-lock"}},[s._v("#")]),s._v(" package-lock")]),s._v(" "),t("h3",{attrs:{id:"锁定规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁定规则"}},[s._v("#")]),s._v(" 锁定规则")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("当 package-lock.json 中的依赖锁定版本符合 package.json 中的版本号范围时，将以 package-lock.json 锁死版本号为主。")])]),s._v(" "),t("li",[t("p",[s._v("当 package-lock.json 中的依赖锁定版本不符合 package.json 中的版本号范围时，将会安装符合 package.json 版本号范围的最新版本号依赖，并重写 package-lock.json 文件")])])]),s._v(" "),t("h3",{attrs:{id:"要不要提交-package-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#要不要提交-package-lock"}},[s._v("#")]),s._v(" 要不要提交 package-lock")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("对于项目开发而言，有必要")]),s._v("。当有了 lock 文件时，每一个依赖的版本号都被锁死在了 lock 文件，每次依赖安装的版本号都从 lock 文件中进行获取，避免了不可测的依赖风险。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("对于库开发而言，也有必要")]),s._v("。虽然项目中所有依赖都会根据项目 lockfile 锁死而并不会依照库依赖的 lockfile，但是为了贡献者能很容易地将项目跑起来，devDependencies 必须在库的 lockfile 中锁定。")])])]),s._v(" "),t("h2",{attrs:{id:"npm-脚本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-脚本原理"}},[s._v("#")]),s._v(" npm 脚本原理")]),s._v(" "),t("ul",[t("li",[s._v("每当执行 npm run xx，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell 可以运行的命令，一般是 Bash，就可以写在 npm 脚本里面。")]),s._v(" "),t("li",[s._v("npm run 新建的这个 Shell，会将当前目录的 node_modules/.bin 子目录加入 PATH 变量，执行结束后，再将 PATH 变量恢复原样，这也就是为什么 npm run 指向的命令能够被执行的原因。")])]),s._v(" "),t("h2",{attrs:{id:"npm-脚本执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-脚本执行"}},[s._v("#")]),s._v(" npm 脚本执行")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bx"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run script1.js & npm run script2.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 并行执行（同时执行）")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"abc"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run script1.js && npm run script2.js"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 继发执行（即只有前一个任务成功，才执行下一个任务）")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Windows 下不支持这 2 种方式，可以通过安装 npm-run-all、Concurrently 模块解决。")]),s._v(" "),t("h2",{attrs:{id:"npm-常用别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-常用别名"}},[s._v("#")]),s._v(" npm 常用别名")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" create -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n")])])]),t("h2",{attrs:{id:"npm-发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-发布"}},[s._v("#")]),s._v(" npm 发布")]),s._v(" "),t("ol",[t("li",[s._v("第一步，在"),t("a",{attrs:{href:"https://github.com/pandao/editor.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm 官网"),t("OutboundLink")],1),s._v("进行注册一个账号。")]),s._v(" "),t("li",[s._v("第二步，执行 npm login，输入注册的账号密码完成登录。")]),s._v(" "),t("li",[s._v("第三步，npm i -y 初始化 package 文件，填入最基本的 3 个字段：name，version 和 main 字段，其中 main 字段应该是打包后的代码。")]),s._v(" "),t("li",[s._v("第四步，在包目录执行 npm publish")])]),s._v(" "),t("h2",{attrs:{id:"npm-变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-变量"}},[s._v("#")]),s._v(" npm 变量")]),s._v(" "),t("p",[s._v("通过 npm"),t("em",[s._v("package")]),s._v("前缀，js 脚本可以通过 process.env 对象拿到 package.json 里面的字段。比如，下面这个 package.json：")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.2.5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"view"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node view.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// view.js")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_package_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_package_version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.2.5")]),s._v("\n")])])]),t("p",[s._v("npm"),t("em",[s._v("package")]),s._v("前缀也支持嵌套的 package.json 字段")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// view.js")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_package_scripts_view"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// node view.js")]),s._v("\n")])])]),t("h2",{attrs:{id:"npm-依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-依赖"}},[s._v("#")]),s._v(" npm 依赖")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("dependencies 生产依赖")])]),s._v(" "),t("li",[t("p",[s._v("devDependencies 开发依赖")])])]),s._v(" "),t("h3",{attrs:{id:"安装命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装命令"}},[s._v("#")]),s._v(" 安装命令")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("npm i --save xxx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生产依赖")]),s._v("\nnpm i --save-dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开发依赖")]),s._v("\n\nnpm i -S xxx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生产依赖（简写）")]),s._v("\nnpm i -D xxx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开发依赖（简写）")]),s._v("\n")])])]),t("h3",{attrs:{id:"是否要严格区分生产和开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是否要严格区分生产和开发"}},[s._v("#")]),s._v(" 是否要严格区分生产和开发？")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("当进行项目开发时，并无必要")]),s._v("。因为打包时，依靠的是 Webpack/Rollup 对代码进行模块依赖分析，与该模块是否在 dep/devDep 并无关系，只要在 node_modules 上能够找到该依赖即可。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("当进行库开发时，有必要")]),s._v("。因为当在项目中安装一个依赖库时，只有该依赖的 dependencies 会被安装到 node_modules 中，devDependencies 不会，因此这里如果不区分，会导致开发项目报错受影响。")])])]),s._v(" "),t("h2",{attrs:{id:"npm-钩子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-钩子"}},[s._v("#")]),s._v(" npm 钩子")]),s._v(" "),t("p",[s._v("npm 钩子，也称 npm 生命周期。npm 默认提供 pre 和 post 两个钩子，当我们执行任意 npm run 脚本时，都将自动触发 pre/post 的钩子但是这 2 个钩子的内容需要由你自定义。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "scripts": {\n    "preabc": "xxx",\n    "abc": "xxx",\n    "postabc": "xxx"\n  }\n}\n')])])]),t("p",[s._v("当你执行 npm run abc 时，会自动按照下面的顺序执行")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run preabc -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run abc -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run postabc\n")])])]),t("p",[s._v("一些常用 npm 脚本，如：publish、install、uninstall、version、test、stop、start 和 restart，同样支持自定义这 2 个钩子。")]),s._v(" "),t("h3",{attrs:{id:"npm-restart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-restart"}},[s._v("#")]),s._v(" npm restart")]),s._v(" "),t("p",[s._v("npm restart 是一个复合命令，实际上会执行三个脚本命令：stop、restart、start。具体的执行顺序如下：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("prerestart\nprestop\nstop\npoststop\nrestart\nprestart\nstart\npoststart\npostrestart\n")])])]),t("h3",{attrs:{id:"npm-publish"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-publish"}},[s._v("#")]),s._v(" npm publish")]),s._v(" "),t("p",[s._v("npm publish 发包的生命周期比较复杂，当执行 npm publish 命令，将自动执行以下脚本：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("prepublishOnly: 最重要的一个生命周期，如果你需要在发包之前自动做一些事情，如测试、构建等，可以在这里完成。\nprepack\nprepare\npostpack\npublish\npostpublish\n")])])]),t("h3",{attrs:{id:"prepare-钩子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-钩子"}},[s._v("#")]),s._v(" prepare 钩子")]),s._v(" "),t("p",[s._v("一个最常用的生命周期钩子，它的执行时机：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("npm install 之后自动执行")])]),s._v(" "),t("li",[t("p",[s._v("npm publish 之前自动执行")])])]),s._v(" "),t("p",[s._v("常用的 git hook 工具 husky 通常就被放置在这个钩子里执行")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  prepare: "husky install";\n}\n')])])]),t("h3",{attrs:{id:"npm-lifecycle-event-变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-lifecycle-event-变量"}},[s._v("#")]),s._v(" npm_lifecycle_event 变量")]),s._v(" "),t("p",[s._v("npm 提供一个 npm_lifecycle_event 变量，返回当前正在运行的脚本名称，比如 pretest、test、posttest 等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的 npm scripts 命令编写代码。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TARGET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_lifecycle_event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TARGET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("Running the test task!")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TARGET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pretest"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("Running the pretest task!")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TARGET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"posttest"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("Running the posttest task!")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"npx-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npx-命令"}},[s._v("#")]),s._v(" npx 命令")]),s._v(" "),t("p",[s._v("npm 从 5.2 版开始，增加了 npx 命令，可以提升开发者使用包内提供的命令行工具的体验，它有很多用处。")]),s._v(" "),t("h3",{attrs:{id:"方便调用项目安装的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方便调用项目安装的模块"}},[s._v("#")]),s._v(" 方便调用项目安装的模块")]),s._v(" "),t("p",[s._v("通常我们安装完 npm 依赖或脚手架后，需要将其写入 package.json 的 scripts 字段里面，运行 npm run xxx 才能执行，npx 就是想解决这个问题，利用 npx，我们可以直接调用运行。")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"serve"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service serve"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service build"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build-bundle"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service build --target lib --name t3-ui ./src/components/index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-cli-service lint"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("我们用 npx 命令的话， 就不需要在写 scripts 里面的内容， 直接在控制台执行 npx vue-cli-service serve，就会直接寻找本地依赖并执行。")]),s._v(" "),t("h3",{attrs:{id:"避免全局安装模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免全局安装模块"}},[s._v("#")]),s._v(" 避免全局安装模块")]),s._v(" "),t("p",[s._v("运行 npx 命令后，npx 会将依赖下载到一个临时目录，使用以后再删除")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx uglify-js@3.1.0 main.js "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" ./dist/main.js // 临时下载压缩包，执行压缩\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx http-server // 临时在当前目录，安装并运行起本地服务器\n")])])]),t("h3",{attrs:{id:"使用不同版本的-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用不同版本的-node"}},[s._v("#")]),s._v(" 使用不同版本的 node")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("npx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" node@6 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run serve\n")])])]),t("p",[s._v("执行逻辑如下：")]),s._v(" "),t("ul",[t("li",[s._v("npx 下载 node@6 版本")]),s._v(" "),t("li",[s._v("将执行的 node 版本切换为 node@6 版本")]),s._v(" "),t("li",[s._v("使用 node@6 执行 npm run serve")]),s._v(" "),t("li",[s._v("命令执行完毕后，删除下载包，最终不会改变本地的使用版本")])]),s._v(" "),t("h3",{attrs:{id:"npx-命令执行逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npx-命令执行逻辑"}},[s._v("#")]),s._v(" npx 命令执行逻辑")]),s._v(" "),t("p",[s._v("先自动查找当前依赖包中的可执行文件，如果找不到，就会去 PATH 里找，如果依然找不到，就会帮你临时安装，执行完后再删除包。")]),s._v(" "),t("h2",{attrs:{id:"npm-init-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-init-命令"}},[s._v("#")]),s._v(" npm init 命令")]),s._v(" "),t("p",[s._v("命令用法：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--force"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-f"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--yes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--scope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("@scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("same as "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("npx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("@scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/create"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("@scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("same as "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("npx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("@scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("create-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("npm init xxx 时，会自动转换成如下 npx 命令：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init foo -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" npx create-foo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init @usr/foo -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" npx @usr/create-foo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init @usr -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" npx @usr/create\n")])])]),t("p",[s._v("以 vue3 官方安装为例，命令实际效果如下：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实际安装的是create-vue@latest包")]),s._v("\nnpm init vue@latest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" npx create"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue@latest\n")])])]),t("p",[s._v("npm exec 命令和 npx 作用相同，区别仅在于后者会将其后面的标志和选项都会优先设置为位置参数，具体可对照 npm 文档。")]),s._v(" "),t("h2",{attrs:{id:"npm-link-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-link-命令"}},[s._v("#")]),s._v(" npm link 命令")]),s._v(" "),t("p",[s._v("简而言之，就是可以将你本地的 npm 开发包当作是已经 npm install 好后的包使用了，用来在本地项目和本地 npm 模块之间建立连接，方便关联到项目中进行修改/调试。")]),s._v(" "),t("h3",{attrs:{id:"局部-link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部-link"}},[s._v("#")]),s._v(" 局部 link")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cd projectPath\nnpm link "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("module   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 然后，你本地项目的node_modules就出现了该module的软链接")]),s._v("\n")])])]),t("h3",{attrs:{id:"全局-link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局-link"}},[s._v("#")]),s._v(" 全局 link")]),s._v(" "),t("p",[s._v("1.注入全局 link")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cd modulePath\nnpm link "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 然后，全局node_modules目录下就出现该module的软链接")]),s._v("\n")])])]),t("p",[s._v("2.引入全局 link")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cd projectPath\nnpm link module\n")])])]),t("h3",{attrs:{id:"解除-link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解除-link"}},[s._v("#")]),s._v(" 解除 link")]),s._v(" "),t("p",[s._v("解除局部 link")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd projectPath\nnpm unlink module\n")])])]),t("p",[s._v("解除全局 link")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd modulePath\nnpm unlink moduleName\n")])])]),t("h3",{attrs:{id:"以-vite-为例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以-vite-为例"}},[s._v("#")]),s._v(" 以 vite 为例")]),s._v(" "),t("p",[s._v("如果你迫不及待想要体验最新的功能，可以自行克隆 vite 仓库，然后到本地机器上然后自行将其链接")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第1步，克隆并进入目录")]),s._v("\ngit clone https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vitejs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vite"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git\ncd vite\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第2步，安装vite作为npm开发包的依赖，然后打包出开发者需要的vite")]),s._v("\npnpm install\ncd packages"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vite\nnpm run build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第3步，全局注入link")]),s._v("\nnpm link\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第4步，进入本地项目，引入link，这个时候就相当于全局安装了vite，类似于执行了vite官方安装命令：npm create vite@latest")]),s._v("\npnpm link "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("global vite\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第5步，package文件的script内dev写入vite命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("dev")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vite'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第6步，执行npm命令")]),s._v("\nnpm run dev\n")])])]),t("p",[s._v("实际测试发现，使用 link 后，第 5 和第 6 步是多余的，本地可以直接在控制台使用 vite 命令，不管你是全局 link 的，还是局部 link 的，都可以运行。")]),s._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),t("ul",[t("li",[s._v("https://q.shanyue.tech/engineering/")]),s._v(" "),t("li",[s._v("https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html")]),s._v(" "),t("li",[s._v("https://www.ruanyifeng.com/blog/2019/02/npx.html")]),s._v(" "),t("li",[s._v("https://segmentfault.com/a/1190000020082099")]),s._v(" "),t("li",[s._v("https://blog.csdn.net/xuewenjie0217/article/details/123008562")]),s._v(" "),t("li",[s._v("https://blog.csdn.net/lw001x/article/details/124133735")]),s._v(" "),t("li",[s._v("https://juejin.cn/post/7018344866811740173")])])])}),[],!1,null,null,null);t.default=e.exports}}]);