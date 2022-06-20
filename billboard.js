//Name on billboard

// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

//create a function. It will take in a name and also the price. 
// need to find the total cost of putting the name on the billboard. 
// cannot use the multiplication operator. 
//Also spaced in the name count as letters. 

// Find out the number of characters in the string. .length will give me the number of characters.
// set a variable as 0. 
// make a loop up to the number of characters in the string. 
// add 30 each time to the total cost to find the final cost.  
// return the total cost. 


function billboard(name, price = 30){
    let totalCost = 0
    // let numChar = name.length
    // console.log(numChar)
    for(let i = 1; i <= name.length; i++){
        totalCost += price
    }
    return totalCost
} 

console.log(billboard("Jeong-Ho Aristotelis"))// 600);
console.log(billboard("Abishai Charalampos"))// 570);
console.log(billboard("Idwal Augustin"))// 420);
console.log(billboard("Hadufuns John",20))// 260);
// console.log(billboard("Zoroaster Donnchadh"))// 570);
// console.log(billboard("Claude Miljenko"))// 450);
// console.log(billboard("Werner Vígi",15))// 165);
// console.log(billboard("Anani Fridumar"))//420);
// console.log(billboard("Paolo Oli"))// 270);
// console.log(billboard("Hjalmar Liupold",40))// 600);
// console.log(billboard("Simon Eadwulf"))// 390);