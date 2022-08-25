const fibonacci = function(index) {
    if(index < 0) return 'OOPS';

    const array = [];
    array[0] = array[1] = 1;
    for(let i = 2; i < 100; i++){
        array[i] = array[i - 1] + array[i - 2];
    }
    return array[Number(index - 1)];
};

// Do not edit below this line
module.exports = fibonacci;
