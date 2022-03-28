// Create a function that checks if number n is divisible by two numbers x and y. All inputs are positivem non zero. 

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0){
      return true
    }else if (n % x=== 0 && n % y !== 0){
      return false
    }else if (n % x !== 0 && n % y ===0){
      return false
    }else if (n % x !== 0 && n % y !== 0){
      return  false
    }
  }