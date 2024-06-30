console.log(global); // 全局对象 类似于window
console.log(globalThis); //globalThis为了统一在window和Node中书写错误最新出来命名
console.log(globalThis === global); //true

//特殊的全局对象 变量可能看起来是全局的，但实际上不是。它们仅存在于 CommonJS 模块 范围内：
console.log(__dirname); //当前文件所在的路径
console.log(__filename); //当前文件所在的路径 + 文件名
