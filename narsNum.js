// Narcissistic Numbers

// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

function isNarcissistic(n) {
    let lenDigits = n.toString().length
    // console.log(lenDigits)
    let arr = n.toString().split("").map(Number)
    // console.log(arr)
   let sum = arr.reduce((sum, cur) => sum + cur**lenDigits,0)
//    console.log(sum)
    if(n === sum){
      return true;
    }else{
      return false
    }
  }

console.log(isNarcissistic(153))// true);
//   console.log(isNarcissistic(1))//true);
//   console.log(isNarcissistic(435))// false);
//   console.log(isNarcissistic(370))// true);
//   console.log(isNarcissistic(324))//false);
//   console.log(isNarcissistic(371))// true);

