//Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(array){
    let newArray = array
    return newArray.concat(array)
}

console.log(duplicate([1,2,3,4,5]))