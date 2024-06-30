/*  三种导出方式 */
/*  导出方式三 */
export const name = "yinaho";

const message = "hello esmodule";
const address = "nanjing";

/*  导出方式一 */
export { message, address };

const age = 18;
/* 导出方式二  可以起别名 */
export { age as date };
