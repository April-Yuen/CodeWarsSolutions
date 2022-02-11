// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

function solution(number){
    let newArray = []
    for(let i = 1; i < number; i++){
      newArray.push(i)
    }
    let filtered3 = newArray.filter(num => num % 3 === 0)
    let filtered5 = newArray.filter(num => num %5 ===0)
    let filtered35= filtered3.concat(filtered5)
    let uniqueEle = [...new Set(filtered35)]
    return uniqueEle.reduce((acc, cur)=> acc + cur,0)
  }