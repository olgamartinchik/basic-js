const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.length === 0) {
            return 1;
        }
        let i = 1;

        for (let elem of arr) {
            if (typeof elem == 'object') {
                this.calculateDepth(elem);
                i++;
            }
        }
        return i;
    }

};