//PREP(Parameters, returns, examples, pseudocode)

// Object Oriented Piracy

// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

// You begin with writing a generic Ship class:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt
// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false
// This Kata teaches you the very basic of method creation.

//Strategy- take in two numbers, they are not strings, null, undefined, or floats. it will be integers. 
//determine if it's worth it to loot. 
//think about the weight each crew memeber brings. 
//without the weight of the ship, only if weight is more than 20, then we should loot. 
//take the weight of crew, and then subtract from the draft, and if the draft is more than 20, loot. 

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt= function(){
        if (this.draft -(this.crew * 1.5) > 20){
            return true
        }else{
            return false
        }
    }
}
   

   var emptyShip = new Ship(0,0);
  console.log(emptyShip.isWorthIt())//false)