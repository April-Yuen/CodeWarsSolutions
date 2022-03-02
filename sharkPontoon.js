// PREP(Parameters, return, examples, pseudocode)
//Holiday VI - Shark Pontoon

// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

//The parameters given  are- distance from pontoon, distance from shark and pontoon, my speed (m/s), sharkspeed (m/s), dolphin (Boolean)-if true, it will cut the spped of shark in 1/2. 

//Only give numbers. 

//return "Alive" if make it to the pontoon. Otherwise, return Shark Bait! 

//Need to calculate my time to get to pontoon. 

//Need to calculate time shark will take to get to pontoon. 

//If shark time is faster than my time, return Shark bait
//if boolean === true, take 1/2 time out of shark time b/c dolphine will attack it. 

//if shark time is not faster than my time, return alive. 


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let myTime = pontoonDistance/ youSpeed
    let newSharkSpeed = dolphin === true ? sharkSpeed/2 : sharkSpeed
    let newSharkTime = sharkDistance/newSharkSpeed
   

      if(newSharkTime < myTime){
          return "Shark Bait!"
      }else{
          return "Alive"
      }
}


console.log(shark(12, 50, 4, 8, true))// "Alive!");
console.log(shark(7, 55, 4, 16, true))//"Alive!");
console.log(shark(24, 0, 4, 8, true))//"Shark Bait!");