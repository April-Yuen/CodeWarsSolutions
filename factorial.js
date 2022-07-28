// Factorial

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
    let nums = []
    for(let i = 1; i <= n; i++){
      nums.push(i)
    }
    return nums.reduce((acc, curr)=> acc * curr,1)
  }