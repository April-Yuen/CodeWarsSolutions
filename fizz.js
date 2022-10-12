// FizzBuzz
// I will be given a number from 1 to n. 
// When the num is divisible by 3, print "Fizz"
// When num is divisible by 5, print "Buzz"
// When divisible by both 3 & 5 print "FizzBuzz"
// Numbers will only be written to a positive number. No neg nums. No decimals. I shouldn't skip any numbers. It should be all nums from 1 to n. 
// n will not be undefined, null, or ""
// parameters => (n) the num

let n = 20
function fizzBuzz(n) {
  // start at 1. Loop needs to iterate to n, incrementing up 1++
  // Write conditionals for each condition. 
  // Need to make sure I start with numbers that are divisible by both 3 & 5 as the first conditional b/c otherwise, it will print out only fizz, or only buzz, rather than fizzbuzz for those that are both. 
  // need to push elements into array or it will stop the loop. 
  let array = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz")
    } else if (i % 3 === 0) {
      array.push("Fizz")
    } else if (i % 5 === 0) {
      array.push("Buzz")
    } else {
      array.push(i)
    }
  }
  return array
}

console.log(fizzBuzz(n)) // 1, 2, "Fizz", 4, 5, "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"
console.log(fizzBuzz(n))// 1, 2, "Fizz", 4, 5, "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz" 