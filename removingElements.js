// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    return arr.filter((ele,index) => index % 2 === 0)
    }


    console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))//['Hello', 'Hello Again']);
    console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))//[1, 3, 5, 7, 9]);
    console.log(removeEveryOther([[1, 2]]))// [[1, 2]]);
    console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))//[['Goodbye']]);

console.log(removeEveryOther(["y","p","a","g","8","h","d","k","3","p","q","n","q","3","4","8","z","h","5","y","o","m","7","d","c","2","6","q"]))

[ 'y', 'a', '8', 'd', '3', 'q', 'q', '4', 'z', '5', 'o', '7', 'c', '6' ]