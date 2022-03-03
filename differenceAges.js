//PREP(Parameters, Return, Example, PseudoCode)
// Find the Difference in Age between Oldest and Youngest Family Members

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

//Taking in an array of ages. 
//return an array that contains, youngest, oldeest, and difference. 
//only numbers, and if under one, age will be 0. 

//strategy will be 
//1) sort the array by lowest- highest. 
//2) declare a variable that will be for the youngest age at index 0.
//3) declare variable that will be for the oldest age at last index (ages.length-1)
//4) declare vailable that will be for the difference between oldest & youngest. 
//5) set the variables into an array based on youngest, oldest, and difference. 


function differenceInAges(ages){
  let sorted = ages.sort((a,b)=> a-b)
  let youngest = sorted[0]
  let oldest = sorted[sorted.length-1]
  let difference = oldest-youngest
  return[youngest, oldest, difference]
}

console.log(differenceInAges([82, 15, 6, 38, 35]))// [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]))// [14, 99, 85])