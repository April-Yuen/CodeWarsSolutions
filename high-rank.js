// Highest Rank Number in an Array
// DESCRIPTION:
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let map = new Map()
    for(let i = 0; i < arr.length; i++){
      if(!map.has(arr[i], 1)){
        map.set(arr[i], 1)
      }else{
        map.set(arr[i], map.get(arr[i])+1)
      }
    }
    let max = Math.max(...map.values())
    for(let [key, value] of map){
      if(value === max){
        return key
      }
    }
  }