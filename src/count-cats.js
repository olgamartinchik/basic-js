const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let sum = 0;
    let arr = matrix.toString().split(',');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '^^') {
            sum++;

        } else if (!arr[i] === '^^') {
            return sum = 0;
        }
    }
    return +sum;

};