const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options.separator === undefined) {
        options.separator = '+'
    }

    let res = '';

    for (let i = 0; i < options.repeatTimes; i++) {
        res += str

        for (let j = 0; j < options.additionRepeatTimes; j++) {

            res += options.addition + (j < options.additionRepeatTimes - 1 ? options.additionSeparator : '');
        }
        res += (i < options.repeatTimes - 1) ? options.separator : '';

    }
    if (options.repeatTimes == undefined && options.additionRepeatTimes === undefined) {
        res = str + options.addition;
    }
    return res

};