// I love you, a little , a lot, passionately ... not at all

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

//no strings
//no empty, null, undefined. 
//no negative number. 
//no floats. 

//return which phase, depending on the number, you would end up at. 
//number can be anything greater than zero. 

function howMuchILoveYou(nbPetals) {
let phrases = ["not at all","I love you", "a little", "a lot", "passionately", "madly"]
return phrases[nbPetals % 6]
}

console.log(howMuchILoveYou(7))//"I love you")
console.log(howMuchILoveYou(3))//"a lot")
console.log(howMuchILoveYou(6))//"not at all")