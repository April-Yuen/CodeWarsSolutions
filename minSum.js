// Minimize Sum Of Array (Array Series #1)

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
    let sorted = arr.sort((a,b)=> a-b)
    return sorted.reduce((acc,cur) => acc + cur * sorted.pop(),0)
  }