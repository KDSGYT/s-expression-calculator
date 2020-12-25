const { multiply } = require("./multiply");
const { add } = require('./add')

/**
 * 
 * @param { string } exp
 */
function calCheck(method, ...exp) {
    // console.log(typeof exp1)
    console.log(
        `method: [${method}]`,
        `exp: ${exp}`
    );
    if (method.includes('add')) {

        if (exp[0].includes('add')) {
            let result = add(calCheck(...exp), exp[2])
            return result;
        }
        else if (exp[0].includes('multiply')) {
            let result = multiply(calCheck(...exp), exp[2])
            return result;
        }
        else {
            return add(exp[0], exp[1])

        }

        // multipicatoin
    } else if (method.includes('multiply')) {

        if (exp[0].includes('add')) {
            let result = add(calCheck(...exp), exp[2])
            return result;
        }
        else if (exp[0].includes('multiply')) {
            let result = multiply(calCheck(...exp), exp[2])
            return result;
        }
        else {
            return multiply(exp[0], exp[1])

        }
    } else {
        // return break;
        console.log('done calculating')
    }
}

module.exports = calCheck;