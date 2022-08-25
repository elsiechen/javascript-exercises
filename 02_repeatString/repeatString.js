const repeatString = function(string, n) {
    let result = '';

    if (n<0) result = 'ERROR';

    for (let i=0; i<n; i++){
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
