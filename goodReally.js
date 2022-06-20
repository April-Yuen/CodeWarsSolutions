//PREP(parameters, returns, examples, pseudocode)
// How good are you really?

const { cursorTo } = require("readline")

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//parameters 1. array with scores, 2. my score
//Need to calculate the average for the class. 
//Then I need to write conditional, true == myscore > avg. else false. 
//all scores are numbers, no floats, strings, booleans, integers, null, or undefined, no negative numbers? 
// result should be an integer, not a float. 
//1. take the array of class points, find the sum of the array. 
//2. take the sum and divide by how many there are. 
//3. then write conditional
//4. if the avg > my score, false, else true. 

function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((acc, cur)=> acc + cur, 0)
    // console.log(sum)
    let avg = sum/classPoints.length
    // console.log(avg)
    if (yourPoints > avg){
        return true
    }else {
        return false
    }

}

console.log(betterThanAverage([2, 3], 5))// true);
   
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))// true);
   
    
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))// false);
  
    
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))// false);
