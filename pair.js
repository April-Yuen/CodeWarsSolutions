// Pair of gloves

// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves){
    let map = new Map()
    let count = 0
    for(let i = 0; i < gloves.length; i++){
      if(!map.has(gloves[i], 1)){
        map.set(gloves[i],1)
      }else{
        map.set(gloves[i], map.get(gloves[i])+1)
      }
    }
    for(let [keys, values] of map){
      if(values >= 2){
        let addCount = Math.floor(values/2)
        count+=addCount
      }
    }
    return count
  }

  console.log(numberOfPairs(['red','red']))//1],
  console.log(numberOfPairs(['red','green','blue']))//0],
  console.log(numberOfPairs(['gray','black','purple','purple','gray','black']))//3]
