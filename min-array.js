// Form The Minimum

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
  }