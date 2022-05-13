const reverseString = function (phrase) {
    let result = ''
    let phraseLen = phrase.length
    while (phraseLen >= 0) {
        result += phrase.slice(phraseLen, phraseLen + 1)
        phraseLen--
    }

    return result
};

// Do not edit below this line
module.exports = reverseString;
