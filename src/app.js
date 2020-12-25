const arguments = require('process').argv.splice(2);// Fetched all the arguments made and removed the first 2
const { add } = require('./functions/add')
const { multiply } = require('./functions/multiply')
const calCheck = require('./functions/functions');
// exports.main = () => {
// for (let i = 0; i < arguments.length; i += 3) {
// console.log(arguments.length)
// if (arguments[arguments] == ')') break;
// console.log(
// calCheck(arguments[i], arguments[i + 1], arguments[i + 2]), arguments[i + 3]
// 
// )
let finalArgument = arguments.filter(item => item!=')' );
// }
// console.log(...finalArgument);
console.log(
    calCheck(...finalArgument)

)
