// +1 Array

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr){
    if(arr === null || arr === undefined || arr === "" || arr.length === 0){
        return null
    }
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < 0 || arr[i] > 9 || typeof arr[i] !== "number"){
        return null
      }
    }
    for(let j = arr.length-1; j > -1; j--){
        if(arr[j]!==9){
            arr[j] = arr[j] + 1
            break
        }else{
            arr[j] = 0
        }
        if(j===0){
            arr.unshift(1)
        }
    }
    return arr
}


console.log(upArray([2,3,9]))// [2,4,0]);
console.log(upArray([4,3,2,5]))// [4,3,2,6]);
console.log(upArray([1,-9]))// null);
