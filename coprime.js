// Coprime Validator

// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

// The inputs will always be two positive integers between 2 and 99.

// Examples
// 20 and 27:

// Factors of 20: 1, 2, 4, 5, 10, 20
// Factors of 27: 1, 3, 9, 27
// Greatest shared factor: 1
// Result: 20 and 27 are coprime
// 12 and 39:

// Factors of 12: 1, 2, 3, 4, 6, 12
// Factors of 39: 1, 3, 13, 39
// Greatest shared factor: 3
// Result: 12 and 39 are not coprimes

function isCoprime(x, y) {
    let arrayX=[]
    let arrayY=[]
    for(let i=0; i <= x; i++){
      if(x % i ===0){
        arrayX.push(i)
      }
    }
    for(let i=0; i <= y; i++){
      if(y % i===0){
        arrayY.push(i)
      }
    }
    let filtered = arrayX.filter(num => arrayY.includes(num))
    if(filtered.length === 1 && filtered[0] === 1){
        return true
    }else{
        return false
    }
  }

  console.log(isCoprime(20, 27))// true, 'isCoprime(20, 27)')
  console.log(isCoprime(12, 39))// false, 'isCoprime(12, 39)')