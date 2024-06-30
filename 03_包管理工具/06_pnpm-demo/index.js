const axios = require("axios");
const dayjs = require("dayjs");

axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log("res", res);
});

console.log(dayjs());
 