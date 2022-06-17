const palindromes = function (phrase) {
    let finalString = phrase.replace(/[!,. ]/g,'').toLowerCase()
    let copy = finalString
    for (let i = 0; i < finalString.length; i++) {
        if (finalString.slice(i, i + 1) === copy.slice(-1)) copy = copy.slice(0, -1)
        else return false
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
