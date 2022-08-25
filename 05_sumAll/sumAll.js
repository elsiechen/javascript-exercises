const sumAll = function(a,b) {
    let sum = 0;
    const length = Math.abs(b-a)+1;
    const start = (a < b)? a: b;

    if(a<0 || b<0) return 'ERROR';

    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';
    }
    
    for (let i=start; i<=length; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
