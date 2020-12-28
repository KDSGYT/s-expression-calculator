const arguments = require('process').argv.splice(2);// Fetched all the arguments made and removed the first 2
const { add } = require('./functions/add')
const { multiply } = require('./functions/multiply')
const calCheck = require('./functions/functions');
const mathjs = require('mathjs');
// exports.main = () => {
// for (let i = 0; i < arguments.length; i += 3) {
// console.log(arguments.length)
// if (arguments[arguments] == ')') break;
// console.log(
// calCheck(arguments[i], arguments[i + 1], arguments[i + 2]), arguments[i + 3]
// 
// )
// let finalArgument = arguments.filter(item => item!=')' );
// }
// console.log(...finalArgument);


const expression = {}
arguments.forEach((item, index) => {
    if (item === ('add') || item === ('(add')) {
        console.log(item)
        if (arguments[index+1] === ('multiply') || arguments[index+1] === ('(multiply')) {
            expression.add = [ {multiply: [arguments[index + 2], arguments[index + 3]]}, arguments[index + 4]]
        }
        else {
            expression = {add:[arguments[index + 1], arguments[index + 2]]}

        }
    } else if (item === ('multiply') || item === ('(multiply')) {
        expression.multiply = [arguments[index + 1], arguments[index + 2]]
    }

})



/**
 * To-Do
 * 
 * 1.Get multiple arguments 
 * 2. Do multi level calculations
 * 3. do calculations with chaining
 * 
 */
console.log(
    // calCheck(...finalArgument)
    // finalArgument
    expression.add
)
