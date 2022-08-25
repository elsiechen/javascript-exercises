const palindromes = function (string) {
    // Create new string by removing punctuation and space
    let newString = '';
    for(let a of string){
        if(isLetter(a)) newString += a;
    }
    // Transform string to lower case
    let lowerString = newString.toLowerCase();

    // Check length is even or odd
    let stringNumber = (lowerString.length % 2 === 0)? 'even': 'odd';
    let lengthString = lowerString.length;

    // Compare if the first and last letters, second and last second letters... are the same
    if(stringNumber === 'even'){
        for(let i = 0; i < lengthString / 2; i++){
            if(lowerString[i] !== lowerString[lengthString - i - 1]) return false;
        }
        return true;
    } else { // 'odd': no need to compare the middle letter
        for(let i = 0; i < (lengthString - 1) / 2; i++){
            if(lowerString[i] !== lowerString[lengthString - i - 1]) return false;
        }
        return true;
    }
};

// isLetter() return true if char is a letter
// lower and upper case of a letter won't be the same
// while lower and upper case of space and punctuation are the same
function isLetter(char){
    return char.toLowerCase() !== char.toUpperCase();
}

// Do not edit below this line
module.exports = palindromes;
