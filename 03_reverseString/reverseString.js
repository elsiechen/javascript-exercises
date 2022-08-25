const reverseString = function(string) {
    let result = [];
    for (let i=0; i<string.length; i++){
        // Split string into single character
        let char = string[i];
        // Add character at the beginning of array (result)
        result.unshift(char);
    }
    // Turn array into comma separated string
    let stringOutput = result.toString();
    // Remove comma from string
    let output = stringOutput.replaceAll(',', '');
    return output;
};

// Do not edit below this line
module.exports = reverseString;
