const message = "hello require";

function sub(n, o) {
  console.log(n + o);
}

// 存在一个module对象对象中存在一个属性exports  exports属性指向同一个内存地址即module.exports(0x100) = exports(0x100) ===> true
// Node中导出的本质是在导出module exports
// 开发中常用写法  {}创建一个新的内存地址 此时与modules.exports(0x200) = exports(0x100) ===> false 不是同一个内存地址
module.exports = {
  message,
  sub,
};

exports.message = "new"; //改变不了message的值
