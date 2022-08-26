const findTheOldest = function(array) {
    
    let sorted = array.sort((a,b) => {
        if(!a['yearOfDeath'] || !b['yearOfDeath']){
            a['yearOfDeath'] = b['yearOfDeath'] = new Date().getFullYear();
        }
        return (a['yearOfDeath'] - a['yearOfBirth']) > (b['yearOfDeath'] - b['yearOfBirth']) ? -1: 1;
    });
    return sorted[0];
    
};

// Do not edit below this line
module.exports = findTheOldest;
