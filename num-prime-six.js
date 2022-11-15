// Is a number prime?

// DESCRIPTION:
// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// parameters -> any number that is positive or negative
// return -> Boolean true or false
// Prime number -> 1 is not prime, 2 is a prime number, 0 is not prime. 


function isPrime(num) {
    //   check the numbers, to see if num is divisible by any number up to that number
    // create a for loop to see if any numbers % index, if it equals 0. 
    if(num < 2){
      return false
    }
      if(num === 2){
        return true
      }
      let maxNum = Math.sqrt(num) + 1
      for(let i = 2; i < maxNum; i++){
        if(num % i ===0){
          return false
        }
        
      }
      return true
    }
      