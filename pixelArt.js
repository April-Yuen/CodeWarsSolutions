//PREP(Parameters, return, example, pseudo Code)
// Thinkful - Number Drills: Pixelart planning

// You're laying out a rad pixel art mural to paint on your living room wall in homage to Paul Robertson, your favorite pixel artist.

// You want your work to be perfect down to the millimeter. You haven't decided on the dimensions of your piece, how large you want your pixels to be, or which wall you want to use. You just know that you want to fit an exact number of pixels.

// To help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.

// Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.

// >>> def equals_three(num):
// >>>     return num == 3
// >>> equals_three(5)
// False
// >>> equals_three(3)
// True

/////////////////////////////////////////////////////////////////////////////

//create a function that takes in 2 parameters. the wall length and amout of pixels for a certain length. 
//It will always be positive numbers, and they will only be integers. 
// I need to return  true or false depending on whether the pixels fit into the wall. 

//strategy- 
// I will use a conditional to return true or false. 
// I also need to see if the pixelSize will divide evenly into the wall length so I would have to use modulus to do that. 
//I will make the modulus equal to 0 to see if it will take in the pixels evenly. 

function isDivisible(wallLength, pixelSize){
    return wallLength % pixelSize === 0 ? true: false 
  }


  console.log(isDivisible(4050, 27))// true);
  
    console.log(isDivisible(4066, 27))// false);
    
   console.log(isDivisible(10000, 20))// true);
   
 console.log(isDivisible(10005, 20))// false);
    
   console.log(isDivisible(10005, 1))// true);