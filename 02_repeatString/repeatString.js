const repeatString = function(phrase, repeats) {
    let result = ''
    if (repeats<0) result = 'ERROR'
    while(repeats>0){
        result += phrase
        repeats--
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
