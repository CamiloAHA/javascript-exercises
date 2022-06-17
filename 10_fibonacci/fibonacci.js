const fibonacci = function (num) {
    if (+num > 0) {
        let firstNum = 0, secondNum = 1, nextNum
        for (let i = 0; i < +num; i++) {
            nextNum = firstNum + secondNum
            firstNum = secondNum
            secondNum = nextNum
        }
        return firstNum
    } else {
        return 'OOPS'
    }
};

// Do not edit below this line
module.exports = fibonacci;
