const removeFromArray = function (arrayInput, ...argsToDelete) {
    let result = arrayInput
    for (let argumentsLen = 0; argumentsLen < argsToDelete.length; argumentsLen++) {
        let selectArg = argsToDelete[argumentsLen]
        for (let i = 0; i < arrayInput.length; i++)
            if (arrayInput[i] === selectArg) result.splice(i, 1)
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
