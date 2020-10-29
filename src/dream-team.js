const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let arr = [];
    let mem = members;
    let str

    for (let i = 0; i < mem.length; i++) {

        if (typeof mem[i] == 'string') {

            arr.push((mem[i].trim().charAt(0)).toUpperCase());


        } else if (typeof mem[i] !== 'string' && typeof mem[i] === 'number' && null && Boolean && undefined && TypeError && typeof mem[i] == 'object') {
            return false;
        }
    }

    str = (arr.sort().join(''));
    return str

};