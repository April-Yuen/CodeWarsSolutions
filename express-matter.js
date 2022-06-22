// Expressions Matter

// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {

    return Math.max(a * (b+c), a * b*c, (a+b)*c, a+b+c)
    // let array = [a,b,c]
    // let sorted = array.sort((a,b)=> a-b)
    // if(sorted[0]+sorted[1]+sorted[2] >(sorted[0] + sorted[1]) * sorted[2]){
    //     return sorted[0]+sorted[1]+sorted[2] 
    // }else{
    //     return (sorted[0] + sorted[1]) * sorted[2]
    // } 
    }

    console.log(expressionMatter(2, 1, 2))// 6);
    console.log(expressionMatter(2, 1, 1))// 4);
    console.log(expressionMatter(1, 1, 1))// 3);
    console.log(expressionMatter(1, 2, 3))// 9);
    console.log(expressionMatter(1, 3, 1))// 5);
    console.log(expressionMatter(2, 2, 2))// 8);