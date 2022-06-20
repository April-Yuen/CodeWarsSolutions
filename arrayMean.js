//PREP(parameters, return, examples pseudocode)

// Grasshopper- Array Mean

// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4
//////////////////////////////////////////////////////////
//Given an array of numbers. There will not be floats, negative numbers, it will be whole numbers. 

//return is another number. I will have to take the sum of the array using the reduce method. 

//Then I will take the length of the array and divide the sum by the lenght of the array. 

//finally I will return the average of the nums. 

var findAverage = function (nums) {
    //find the sum of the array. I will use the reduce method. 
    let sum = nums.reduce((acc, cur) => acc + cur, 0)/nums.length
    return sum
   
}

console.log(findAverage([1]))// 1)
console.log(findAverage([1, 3, 5, 7]))// 4)