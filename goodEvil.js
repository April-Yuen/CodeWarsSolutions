//PREP(parameters, returns, examples, pseudocode)

// // Good vs Evil

// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

//Each parameter will be a string that tells the number of people on each team. 
//Based on the number of people, I need to find the total points. 
//Based on the total points, I need to return one of the statements. 
//The numbers will always be non negative integers. 
function goodVsEvil(good, evil){
    //take the parameters and turn them into an array.
    let arrayGood = good.split(" ")
    //first I split, then I turned the strings into numbers, I'm going to chain these methods 
    let intGood = arrayGood.map(num => parseInt(num))
    let arrayEvil = evil.split(" ")
    let intEvil = arrayEvil.map(num => parseInt(num))

    let sumGood = (intGood[0] * 1) + (intGood[1] * 2)+ (intGood[2] * 3)+(intGood[3] * 3)+(intGood[4] * 4)+ (intGood[5] * 10)
    let sumEvil = (intEvil[0] * 1)+(intEvil[1] * 2)+(intEvil[2] * 2)+(intEvil[3] * 2)+(intEvil[4] * 3)+(intEvil[5] * 5)+(intEvil[6] * 10)
    //conditional
    if(sumGood > sumEvil){
        return "Battle Result: Good triumphs over Evil"
    }else if (sumGood < sumEvil){
        return "Battle Result: Evil eradicates all trace of Good"
    }else{
        return "Battle Result: No victor on this battle field"
    }

}



console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))// 'Battle Result: Evil eradicates all trace of Good');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))// 'Battle Result: Good triumphs over Evil');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))// 'Battle Result: No victor on this battle field');