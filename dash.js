// Dashatize it

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'
function dashatize(num) {
    let newNum = Math.abs(num).toString()
    let newDash =""
    for(let i = 0; i < newNum.length; i++){
        if(newNum.length===1){
            return Math.abs(num).toString()
        }else if(i==0 && newNum[i] % 2===1){
            newDash+=newNum[i]+"-"
        }else if(i==newNum.length-1 && newNum[i] % 2 ===1 && newNum[i-1] %2 ===0){
            newDash+="-"+newNum[i]
        }else if(newNum[i] % 2 ===1 && newNum[i-1] % 2 ===1 && i !==newNum.length-1){
            newDash+=newNum[i]+"-"
        }else if(newNum[i] % 2 ===1 && newNum[i+1] % 2 ===1){
            newDash+="-"+newNum[i]+"-"
        }else if(newNum[i-1] % 2 ===0 && newNum[i] % 2 ===1 && newNum[i+1] % 2 ===0){
            newDash+="-"+newNum[i]+"-"
        }else{
            newDash+=newNum[i]
        }
    }
    return newDash
}

console.log(dashatize(274))// "2-7-4", "Should return 2-7-4");
console.log(dashatize(5311))// "5-3-1-1", "Should return 5-3-1-1");
console.log(dashatize(86320))// "86-3-20", "Should return 86-3-20");
console.log(dashatize(974302))// "9-7-4-3-02", "Should return 9-7-4-3-02");

console.log(dashatize(NaN))// "NaN", "Should return NaN");
console.log(dashatize(0))// "0", "Should return 0");
console.log(dashatize(-1))// "1", "Should return 1");
console.log(dashatize(-28369))// "28-3-6-9", "Should return 28-3-6-9");
console.log(dashatize(8394))//'8-3-9-4'