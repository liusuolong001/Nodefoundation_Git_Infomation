# Node.js

###【0.】Node的基础概念
# Node是什么
node是基于v8 javascript引擎的javascript运行环境
Node.js不是库,是一个运行环境,或者说是一个JS语言解释器。

# Node是用什么语言编写的
JS/C++/C语言

# Node的应用场景
1.前端开发库都是以node包的形式进行管理  npm/yarn/pnpm
2.npm/yarn/pnpm 工具成为前端开发使用最多的工具
3.使用Node作为服务器的开发/代理服务器/中间件
4.大量项目需要借助Node.js完成前后端渲染的同构应用

#Node版本
1.LTS版本 长期稳定版本(公司中支持长期稳定版本)
2.Current 新版本(新特性 个人学习来说)

#Node版本管理工具 nvm
n(推荐)/nvm  这两个工具都不支持windows版本 支持mac 
nvm/windows替换版本  //https://github.com/coreybutler/nvm-windows
n github地址//https://github.com/tj/n?tab=readme-ov-file#installing-nodejs-versions
mac切换node版本命令 n(查看所有node版本)-->选择要切换的node版本 ![mac下载/切换node版本需要切换为超级管理员 命令suod su(进入超级管理员)/sudo n  exit(退出超级管理员)]
[n <version> | suod n 10.16.0] 下载命令
[n lts] 下载长期稳定版本


###【1.】Node的基础知识
windows cls(清空控制台) linux mac clear(清空控制台) 
mac控制台快速cd到文件夹位置 cd <文件夹名(前两位)> + tab´´´´´

#特殊的全局对象 变量可能看起来是全局的，但实际上不是。它们仅存在于CommonJS模块范围内：´´
__dirname <!-- 当前文件所在的路径 -->
console.log(__dirname);
__filename <!-- 当前文件所在的路径 + 文件名 -->
console.log(__filename); 

#Node中全局对象没有window 全局对象为global
[global与window相同点]
ES新版本防止写错出了一个globalThis(适用于window与node)
1.window:
浏览器 直接调用 window.Log
console.log(window === globalThis); //true
2.node
console.log(global === globalThis); //true
[global与window不同点]
1.window中没有global
  window中声明 var message = 'hello window'浏览器会将其加入到window中
2.node中没有window
  node中声明 var message = 'hello node'node不会将其加入到global中


###【2.】Node模块化开发
Js没有推出模块化方案时社区中提出的几种方案:CommonJs(现在依旧流行)/AMD/CMD
Js推出模块化方案的方案:ESModule
[CommonJs ESModule 重点]

# CommonJs 简称cjs  [Node中运行]
1.Node是CommonJs在服务器的一种表现
  Node中每一个文件都是一个单独的模块
  CommonJs核心变量
  /exports(导出) 本质[拿到一个内存地址赋值] 拿到exports的内存地址赋值给utils   const utils = require('./util.js')
  /module exports(导出) 本质[存在一个module对象对象中存在一个属性exports] 默认情况下modules.exports与exports指向同一个对象
  ![相同点]
  前提写法:{
    exports.name = name
    modules.exports.name = name
    modules.exports与exports属性指向同一个内存地址
  }
  ![不同点]
  前提写法:{
    {}创建一个新的内存地址
    modules.exports = {
      name,
      age
    }
    modules.exports指向一个新的内存地址与exports属性不在指向同一个内存地址
  }
  /require(导入)
  查找规则 require(X)
  {
    1.X是一个核心模块的时候 const path = require('path') 直接返回内置模块
    2.X是以./或者../或者(根目录)开头时 将X当作一个文件去查找 const utils = require('./utils')utils.js/utils.json/utils.node 如果都没有会将其当作目录去找查找目录下的index.js/json/.node
    3.X不是一个路径也不是一个核心模块 const axios = require('axios') 会去node_modules中查找axios中的index.js/json/.node
  }
  ![结论](Node中导出的本质是在导出module exports)
2.Browserify是CommonJs在浏览器的一种表现 (如今开发不在使用) 浏览器不支持CommonJs
3.Webpack打包工具是具备CommonJs的支持和转换 

# 模块加载过程
1.第一次进入时会将Js中数据全部加在一次
2.第二次进入时候会根据module.loaded是true还是fasle判断 第一次为false(未缓存)第二次为true(已缓存)所以不会再一次加载Js中的数据
3.循环引入  Node采用的是深度优先

#CommonJs规范缺点 [Node中运行]
1.CommonJs加载模块是同步的
  服务器上无问题因为加载的js文件都是本地文件
  应用于浏览器时加载js文件需要从服务器将文件下载下来在加载运行采用同步就意味后续的js代码无法执行

#EsModule
![EsModule与CommonJs不同点]
{
  EsModule:
  1.使用import和export
  export{ name , age } 不是一个对象并且导出是esmodule固定写法也不是es6增强写法
  2.采用编译期的静态分析,并且加入动态引用方式
  CommonJs:
  1.采用exports/module.exports/require
  2.底层原理不一样
}

#EsModule注意事项
1.注意import 导入的时候main要加后缀名.js不然找不到此文 【CommonJs不加后缀require中会进行推导】
2.打开对应的html时,如果html中有使用的模块代码,那么必须开启一个服务打开 Open with live server

#EsModule导出导入的几种方式 [浏览器/webpack中运行]
【导出方式】
1.export const name = "yinaho";
2.export { age as date }; [可以起别名]
3.export { message, address };【常用】
【导入方式】
1.import { message, address } from "./main.js";
2.import { message as a, address as b } from "./main.js"; [起别名]
3.import * as c from "./main.js"; [导入时可以给整个模块起别名]

#EsModule导出方式优化
export { name, height } a文件
export { age } b文件
【导出】 export { message, address } from "./a.js";  <!-- 导出方式优化(一)  export与import结合使用 用于优秀代码中 -->
【导入】 import { name, message, address } from "./utils/index.js";


#EsModule默认导出
<!--  默认导出 一个文件只能有一个默认导出  -->
export default function () {
  return "后端看不了一点";
}
<!-- util 形参名称 -->
import util from "./utils.js";

### 【3.】包管理工具
# npm包管理工具
代码共享方案的三种方式
1.Axios官网
2.Github
3.npm registry【通过npm下载node_modules require('axios')/import引用】

# npm的配置文件
【package.json】配置文件
<!-- 配置文件会记录你的项目名称、版本号、项目描述.... 也会记录你项目所依赖的其他库的信息和依赖库的版本号 -->
【如何创建?package.json】
1.手动从零创建项目 [npm init -y][yarn init -y][pnpm init]
2.通过脚手架创建项目,脚手架会自动生成package.json,并且有相关的配置

## package.json的配置文件
npm init #创建时填写信息  npm init -y #所有的信息使用默认的;
{
【常见属性】
name:项目名称
version:当前项目版本号
main:设置了应用程序的入口点
private:是否私有的【true,npm是不能发布它的防止误操作】
script:可以运行的 node 脚本【编写脚本】
description:描述信息,作为项目的基本描述
author:作者相关信息(发布的时用)
license:开源协议(发布的时用)
dependencies 此项目所依赖列表【无论开发环境还是生产环境都需要依赖的包】[开发依赖/生产依赖]
devDependencies 此项目一些包在生产环境是不需要【如:webpack\babel...】[开发依赖] --save-dev安装开发依赖 简写-D [注意:npm安装生产依赖 --save-dev/-D都可以安装 ｜ yarn只能-D安装]
peerDependencies 对等依赖【安装一个包,他必须是以另一个宿主包为前提 如:element-plus 必须依赖 vue包】
}

## package-lock.json的配置文件 = yarn.lock配置文件 = pnpm-lock.yaml配置文件 
【共同点】
1.依赖关系的锁定 确保在不同的环境中安装相同的依赖版本,实现一致性。明确指出依赖包的具体版本如axios:1.7.2
2.版本控制 这些文件都应被提交到版本控制系统（如Git）,以便团队成员可以在相同的依赖版本上工作
【不共同点】
1.package-lock.json是npm生成的文件   yarn.lock是Yarn生成的文件。            pnpm-lock.yaml是pnpm生成的文件。
2.package-lock.json是json格式文件    yarn.lock纯文本格式                   pnpm-lock.yaml是yaml格式。
3.package-lock.json是npm install    yarn.lock是yarn install/yarn         pnpm-lock.yaml是pnpm install
4.package-lock.json是npm5开始引进的   yarn通常在某些情况下会速度更快功能更齐全  查看 ##Pnpm
{
【 常见属性 不会手动维护】
name:项目名称
version:项目版本号
lockfileVersion:lock文件的版本
require:使用require来跟踪模块的依赖关系
description:项目的依赖
  'axios':{
    version:实际安装的axios版本
    resolved:记录下载的地址,npm registry仓库中的位置,
    integrity:用来从缓存中获取索引,再通过索引去获取压缩包文件,
    requires/dependencies:记录当前模块的依赖
    engines:运行时环境要求
  }
}

## yarn.lock配置文件  yarn.lock配置文件中无engines字端
'axios':{
  version:实际安装的axios版本
  resolved:记录下载的地址,npm registry仓库中的位置,
  integrity:用来从缓存中获取索引,再通过索引去获取压缩包文件,
  dependencies:记录当前模块的依赖

}

## pnpm-lock.yaml 配置文件 
{
  lockfileVersion：lock文件的版本
	importers:列出项目中的各个包
  .:
  dependencies: 【开发依赖/生产依赖】
      axios:【依赖包】
        specifier: ^1.7.2【表示 package.json 中的依赖项及其版本范围】
        version: 1.7.2 【具体版本】
    devDependencies: 【开发依赖】
      webpack:【依赖包】
        specifier: ^5.91.0
        version: 5.91.0
  .:
	packages: 列出所有依赖项及其具体版本、校验信息、依赖关系等详细信息
  {
    webpack@5.91.0:包的名称和版本号
    resolution:【integrity】 integrity: 这是包的完整性哈希值（使用 SHA-512 算法）。它用于验证下载的包内容是否未被篡改。
    engines:运行时环境要求
    hasBin:字段表示该包包含可执行文
    peerDependencies: 对等依赖【安装一个包,他必须是以另一个宿主包为前提 如:element-plus 必须依赖 vue包】
  }
}

##npm start和npm run start的区别是什么?
他们是等价的;
对于常用的start,test,restart可以省略run直接通过npm start等方式运行

##依赖的版本管理
npm的包通常要遵守semver版本规范;
[^1.7.2(X:1,Y:7,Z:2)]
semver版本规范是X.Y.Z:
X:主版本号:当你做了不兼容的Api修改(可能不兼容以前的版本)
Y:次版本号:当你做了向下兼容的功能性新增(新功能增加,但是兼容之前的版本)
Z:修订号:当你做了向下兼容问题修正(没有新功能,修复了之前版本的bug)

## 解释^1.7.2或者~1.7.2
X.Y.Z(1.7.2):表明一个明确的版本号;
^X.Y.Z(^1.7.2):表示X是保持不变的,Y和Z永远安装的最新版本;
~X.Y.Z(~1.7.2):表示X和Y是保持不变的,Z永远安装的最新版本;

##npm install原理【了解】
npm install 他背后做了什么操作?
{
  1.读取 package.json 文件
  2.解析依赖项
  3.创建 node_modules 目录
  4.下载并安装包
  5.生成或更新 package-lock.json 文件
  6.行生命周期脚本
}
package.json的文件,他的作用是什么?
{
  1.依赖关系的锁定
  2.版本控制
}
从npm5开始,npm支持缓存策略(来自yarn的压力),缓存有什么作用呢
![npm原理](./picture/P_node/npmprinciple.png)


## npm 命令  -->  yarn命令 --> cnpm命令【国内方便下载依赖】--> pnpm
0.安装某个依赖包 npm install <package>  --> yarn add <package>  --> pnpm add <package>
1.卸载某个依赖包 npm uninstall <package>  --> yarn remove <package>  --> pnpm remove <package>
2.重新构建[将已经安装依赖重新安装一遍] npm rebuild  --> yarn install -force
3.清除缓存 npm cache clean --> yarn cache clean
4.删除安装项目整个依赖node_modules    rm -rf node_modules && npm install [删除node_modules在安装] --> yarn upgnode
5.安装项目整个依赖 npm install --> yarn install/yarn --> pnpm install

##npx工具
npx是npm5.2之后自带的一个命令
【查看本地webpack版本?】
文件中执行webpack --version 查找的依旧是全局的webpack版本 
【解决方案】[注:可执行命令在文件中找不到并不会去node_modules里面自动寻找而是去环境变量中查找 !== CommonJs require中自动去node_modules文件中查找]
1.进入cd node_modules里的bin执行webpack --version查找的就是本地的webpack版本
2.npx webpack --version [npx === 直接去node_modules/bin 文件去查找可执行命令]
3.修改package.json中script "webpack":"webpack --version" [package.json优先是就是去node_modules中查找webpack]

## webpack打包
1.早期执行npx webapck [去node_modules/bin下执行webapck打包生成dist文件]只有在文件终端才需添加npx 
2.package.json中script中执行命令"build":"webpack" [不需要添加npx因package.json优先是就是去node_modules中查找]

##发布到npm步骤
1.文件中登陆 npm login
2.发布 npm publish

##Pnpm
![pnpm本质原理](./picture/P_node/pnpmprinciple.png)


[Vue在内很多公司或者开源项目的包管理工具都切换到pnpm了]
【优势】
1.快速:pnpm是比其他包管理器快2倍
2.node_modules:中的文件链接自特定的内容寻址存储库,依赖包就会被存放在一个统一的位置  [!!npm/yarn 痛点:当存在100个项目时候并且所有项目都依赖一个相同的依赖包axios那么你的硬盘上就会存在100个依赖包axios]
{
  【pnpm解决方案】
  1.依赖同一依赖包使用的相同版本 如:axios,那么磁盘上就只有一份依赖包的axios
  2.同一依赖包使用不同的版本,则仅有版本之间不同的文件才会被储存起来
  3.所有文件都被保存在硬盘上的统一位置
}
3.支持monorepos:pnpm内置支持单仓多包
4.严格:pnpm默认创建了一个非平铺的node_modules,因此代码无法访问任意包  [!!npm/yarn平铺的node_modules 痛点:当我代码中导入并且使用一个webpack所依赖的包的时如:ajv 此时在package,json中并看不到此依赖包 如果将其webpack卸载则所依赖包跟着卸载但是代码中使用了会产生的错误]
{
  【pnpm解决方案】
  1.非扁平化nod_modules 代码require('form-data')先去node_moduels中查找因为使用pnpm软链接压根就就找不到此form-data自然无法在代码中使用 避免项目当中去访问一下你并没有下载的包
  2.node_modules中存在.pnpm axios是软链接(后面有符号)路径指向.pnpm中的axios .pnpm中的axios最终的硬链接磁盘里axios
  ![pnpm扁平化结构](./picture/P_node/pnpmflattening.png)
}

##操作系统的概念 硬链接和软链接的概念
硬链接:电脑文件系统中的多个文件平等的共享同一个文件储存单元  Ps:通过一个文件去读取磁盘里面的数据就是硬链接
软链接/符号链接:一个以绝对路径或者相对路径的形式指向其他文件或者目录的引用 Ps:通过地址去找到硬链接的文件再通过此文件去读取磁盘里面的数据叫做软链接
![硬链接/软链接/符号链接结构图](./picture/P_node/hardlink:softlink.png)

##Pnpm的存储store
查找pnpm的store命令 pnpm store path
从store中删除当前未被引用的包来释放store的空间 pnpm store prune

###【question】[问题]
1.![Mac npm axios时没有权限](解决: sudo chown -R yinhao node_modules)

###【4.】邂逅webpack和打包过程

##path常见API
<!-- 内置api path -->
const path = require("path");
path.dirname(a); 获取文件的父文件夹
path.basename(a); 获取文件的文件名
path.extname(a); 获取文件的扩展名 
const a = path.resolve("./yinhao", "./path", "./test.txt");
{
  【path.resolve()】
  1.将多个路径拼接在一起,最终返回一个绝对路径: path.resolve()
  2.顺序从左往右,后面每个path被一次解析,直到构造完成一个绝对路径
  3.如果处理完所所有path,还是没有生成绝对路径,则使用当前工作目录
  4.生成的路径被被规范化并删除尾部斜杠,0长度path段被忽略
  5.如果没有path传递段,path.resolve()将反悔当前工作目录的绝对路径
}

##webpack的基本使用  webpack打包的是项目中index.js文件
const path = require("path");
<!-- webpack跑在Node上面使用CommonJs EsModule跑在浏览器上面 -->
module.exports = {
 entry: "./src/main.js", index.js是默认文件名【项目入口文件】
 output: {【项目出口文件】
    filename: "bundle.js", 【打包后文件名】
    path: path.resolve(__dirname, "./dist"), 【path要求绝对路径 打包后文件夹】
  },
  module: {
    rules: [
      {
        <!-- test: /\.css$/, 【! test是正则 不是字符串】
        use: ["style-loader", "css-loader", "postcss-loader"], 【css-loader只负责解析css文件 style-loader负责将解析完css文件渲染到页面中 loader执行顺序是从后往前】 -->
      },
    ],
  },
}

##PostCSS 
1.通过Javascript来转换样式的工具
2.进行一些css的转合和适配,比如自动添加浏览器前缀css样式的充值

npm install autoprefixer ｜ postcss-preset-env -D
- 实现功能是要借助于postcss对应的插件  依赖postcss添加浏览器前缀 
- 浏览器前缀并且将不支持转换css新特性 postcss-preset-env

## postcss.config.js 单独配置文件
module.exports = { 
  plugins:[require('autoprefixer')] <!-- 可以省略 postcssOption webpack会自动去寻找postcss.config.css -->
}

## webpack.config.js 配置文件中 需要加上 postcssOption
{
  loader: "postcss-loader",
  options: {
    postcssOption: {
      plugins: ["autoprefixer"],
    },
  },
},

##认识asset module type
- 在webpack5之前加载资源需要loader比如raw-loader,url-loader,file-loader
- 在webpack5开始可以直接使用内置的资源模块类型,来替代上面loader
{
  1.asset/resource 【发送一个单独的文件并导出】webpack5之前 file-loader
  2.asset/inline 【导出一个资源的data URL 】[将图片进行base64编码] url-loader 
  3.asset/source 【导出资源的源代码】[将源码的图片生成到dist文件] raw-lodist
  4.asset 【在导出一个data URL和发送一个单独的文件之间选择】 url-loader
}


###【5.】邂逅babel

## babel是什么?
- babel是一个独立的工具[可以不在webpack中使用],将旧浏览器或者环境中ES6+代码/TS/JSX...转化成向后兼容版本的javascript代码(ES5的代码)
- 语法转换\源代码转换....

## babel.config.js 配置预设【常用】
pnpm add @babel/preset-env 安装预设
module.exports = {
  presets: ["@babel/preset-env"], <!-- env:将ES6+代码转化成向后兼容版本的javascript代码(ES5的代码) -->
};
{
  1.env:将ES6+代码转化成向后兼容版本的javascript代码(ES5的代码)
  2.react:将react代码....
  3.typescript:将typescript代码
}

## webpack中resolve 
  [!!! resolve模块解析 作用:项目中配置模块解析的方式如文件地址配置别名/自动补全文件扩展名....] 
  [css-loader/style-loader 作用: 将.css等文件通过loader解析 处理文件类型]
- 绝对路径 获取文件的绝对路径因此不需要做进一步的解析
- 相对路径 拼接上下文目录生成模块的绝对路径
- 模块路径 在reslove_modules默认是node_modules去查找
{
- [import utils from './utils/index']  
   如果是一个文件 如果具有扩展名直接打包文件 否则使用resolve.extensions作为文件扩展名解析 默认值['.js', '.json', '.wasm','.mjs']
- [import utils from './utils']   
   如果是一个文件夹 1.根据resolve.mainFiles解析默认是index文件 2.在根据resolve.extensions 解析文件
}
## webpack中配置resolve.extensions可以使esmodule important自动添加后缀名
 module.exports = {
  // 其他配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 【类型别名 简化模块的引用路径】
    },
    extensions: ['.js', '.vue', '.json'] 【 webpack中resolve默认配置名是['.js', '.json', '.wasm','.mjs'] 此处添加其他esmodule important 导入可以不用加这三个后缀名 import approval from './component/approval'】
  }
};

###【6.】邂逅plugin 插件

## 邂逅plugin
plugin 可以执行更加广泛的任务 比如打包优化(clean-webpack-plugin)\资源管理\环境变量注入(DefinePlugin)....
- clean-webpack-plugin 【自动删除打包的dist文件】
- DefinePlugin 内置插件plugin 【编译配置的全局常量】[process.env.NODE_ENV]

## mode 告知webpack使用相对应的模式内置优化
默认值 production 将DefinePlugin中process.env.NODE_ENV设置为开发环境
可选值 'none'/'developent'/'production'

## 【7.】webpack搭建本地服务器
pnpm add webpack-dev-serve -D 【webpack-dev-serve自动打包并且不会生成硬盘里的打包文件dist webpack-dev-serve打包文件在缓存里里面】
"serve": "webpack serve --open" package.json 【配置】
dev-serve:{
 hot:true 热更新【默认值true 修改代码浏览器自动刷新】
} 
修改某一模块的代码的时候,依旧是刷新整个页面需要指定哪些模块发生更新
module.hot.accept('./utils.js',()=>{})

## 框架的HMR
Vue开发中 vue-loader 此loader支持vue组件的HMR
React开发中 react-refresh 支持React组件的HMR

## webpack 区分开发环境和生产环境
const {merge} = require('webpack-merge') 
- 早期vue2的版本通过merge来区分开发环境还是生产环境 之后的版本将webpack合并到vue-serve-cli里打包