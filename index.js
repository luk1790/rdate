// import rDate from "./src/index";
var rDate = require('./src/index');

// eslint-disable-next-line no-console
const date = new rDate([10, 12, 1990]);
console.log(date.format('MM'));
