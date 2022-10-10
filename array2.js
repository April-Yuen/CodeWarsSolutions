// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The array passed in should be mutated by this function. Scandalous, I know.

let x = 'xyz'
// let myArray = ['abc', 'xyz', 1, 2, 'Hey!']
// let myArray = ['xyz', 'abc', 1, 2, 'Hey!']
let myArray = ['xyz', 'abc', 1, 'Hey!', 2] 

function moveLeft(x, myArray){
    for(let i = 0; i < myArray.length; i++){
        let xLoc = myArray.indexOf(x)
        let indexBefore = myArray[xLoc-1]
        if(xLoc !== 0){
            myArray[xLoc-1] = x
            myArray[xLoc] = indexBefore
        }
    }
    return myArray
}

let j = 2
function moveRight(j, myArray){
    for(let i = 0; i < myArray.length; i++){
        let jLoc = myArray.indexOf(j)
        let elementAfter = myArray[jLoc+1]
        if(jLoc !== myArray.indexOf(myArray.length-1)){
            myArray[jLoc + 1] = j
            myArray[jLoc] = elementAfter 
        }
    }
    return myArray
}

console.log(moveLeft(x, myArray))
console.log(moveRight(j, myArray))