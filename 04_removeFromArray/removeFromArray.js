const removeFromArray = function (arrayInput, ...argsToDelete) {
    let result = arrayInput
    for (let argsIndex = 0; argsIndex < argsToDelete.length; argsIndex++) {
        let selectArg = argsToDelete[argsIndex]
        for (let i = 0; i < arrayInput.length; i++)
            if (arrayInput[i] === selectArg) result.splice(i, 1)
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
