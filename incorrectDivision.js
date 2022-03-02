// PREP(Parameters, return, example, pseudocode)

// Incorrect division method

// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

//this is an implicit return. 
//It will take in two parameters, x and y. They will be numbers. It can be decimal numbers, 0. There will be no strings
//They solved it incorrectly and I need to solve. I am just working on fixing division and not other operators. 

const solve = (x, y) => x/y

console.log(solve(2, 1))// 2);
console.log(solve(2, 4))// 0.5);
console.log(solve(42, 0))// Infinity);
console.log(solve(0, 8))// 0);
console.log(solve(7, 2))// 3.5);
console.log(solve(4.2, 1))// 4.2);
console.log(solve(9999, 11))// 909)