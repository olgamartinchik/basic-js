const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('THROWN')
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-next') {
            let ind = arr.indexOf('--double-next');
            if (ind === arr.length - 1) {
                arr.splice(ind, 1);
            } else {
                arr.splice(ind, 1, ind + 1);
            }
        }

        if (arr[i] === '--double-prev') {
            let ind = arr.indexOf('--double-prev');
            if (ind === 0) {
                arr.splice(ind, 1);
            } else {
                arr.splice(ind, 1);
                arr.splice(ind, 0, ind);
            }
            console.log(arr[ind])
        }

        if (arr[i] === '--discard-prev') {
            let ind = arr.indexOf('--discard-prev');
            if (ind === 0) {
                arr.splice(ind, 1);
            } else {
                arr.splice(ind, 1);
                arr.splice(ind - 1, 1);
            }
        }

        if (arr[i] === '--discard-next') {
            let ind = arr.indexOf('--discard-next');
            if (ind === arr.length - 1) {
                arr.splice(ind, 1);
            } else {
                arr.splice(ind, 1);
                arr.splice(ind, 1);
            }
        }
    }

    return arr
};