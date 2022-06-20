// Sum of Odd Cubed Numbers

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//if any of the values are not numbers, it should return undefined. Can be letters, symbols, etc. 
//cube the numbers first, and then add them up. 

function cubeOdd(arr) {
for(let i= 0; i < arr.length; i++){
    if(isNaN(arr[i] || arr === NaN)){
        return undefined
    }
}
let newArray = arr.map(num=> num**3)
let filtered = newArray.filter(num => num %2 !==0)
let sum = filtered.reduce((acc,cur) => acc + cur, 0) 
return sum;

}

console.log(cubeOdd([1, 2, 3, 4]))// 28);
console.log(cubeOdd([-3,-2,2,3]))// 0);
console.log(cubeOdd(["a",12,9,"z",42]))// undefined);
