//PREP(parameters, return, example, pseudocode)
// Enumerable Magic #3 - Does My List Include This?

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//take in an array, and an item. 
//need to see if the item is in the array, if yes, return true, if no, return false. 

//1)need a for loop

//need a conditional. 

function include(arr, item){
  return arr.includes(item);

}

console.log(include([1,2,3,4], 3))// true )
console.log(include([1,2,4,5], 3))// false)

