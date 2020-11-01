const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1, counter = 0) {
        for (let elem of arr) {
            if (Array.isArray(elem)) {
                depth = this.calculateDepth(elem);
                if (counter < depth)
                    counter = depth;
                else
                    counter = counter;
            }
        }
        return ++counter;
    }

};