const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj = {
        turns: 0,
        seconds: 0,
    }

    obj.turns = 2 ** disksNumber - 1;
    obj.seconds = Math.floor((2 ** disksNumber - 1) / turnsSpeed * 3600);
    return obj;
};