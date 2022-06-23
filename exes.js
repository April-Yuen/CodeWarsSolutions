// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let countx=0
    let counto=0
    let newStr = str.toLowerCase()
    let newArr = newStr.split("")
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] =="x"){
            countx++
        }else if(newArr[i]=="o"){
            counto++
        }
    }
    return countx == counto ? true : false
}

console.log(XO('xo'))//true);
console.log(XO("xxOo"))//true);
console.log(XO("xxxm"))//false);
console.log(XO("Oo"))//false);
console.log(XO("ooom"))//false);