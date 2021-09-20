/**
 * Returns the sum of two numbers
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {string} operator
 * @returns {number}
 */
function calc(a, b, operator) {
    return eval(`${a} ${operator} ${b}`);
}

let result = calc(2, 3, '*');
console.log(result);