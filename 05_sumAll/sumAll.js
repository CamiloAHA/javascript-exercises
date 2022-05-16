const sumAll = function (numA, numB) {
    let result = 0
    let initialNum = numB
    let finalNum = numA
    if (typeof numA != 'number' || typeof numB != 'number' || numA < 0 || numB < 0) return 'ERROR'
    if (numA < numB) {
        initialNum = numA
        finalNum = numB
    }
    for (let i = initialNum; i <= finalNum; i++) {
        result += initialNum
        initialNum++
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
