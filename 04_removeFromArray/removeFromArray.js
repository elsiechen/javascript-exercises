const removeFromArray = function([...args], ...args2) {
    // Store indexes of removed elements according to args
    let removedIndexes = [];
    for (let i=0; i<args.length; i++){
        for(let j=0; j<args2.length; j++){
            if(args[i] === args2[j]) removedIndexes.push(i);
        }   
    }
    console.log('removedIndexes:', removedIndexes);
    // Sort indexes in ascending order
    let sortedIndexes = removedIndexes.sort((a,b) => a-b);
    console.log('sortedIndex: ', sortedIndexes);

    // Remove elements from args by checking the last element 
    // (highest index)in sortedIndex and delete the element 
    // from args by index
    for (let i = sortedIndexes.length-1; i>=0; i--){
        args.splice(sortedIndexes[i], 1);
    }
    return args;
};

// Do not edit below this line
module.exports = removeFromArray;
