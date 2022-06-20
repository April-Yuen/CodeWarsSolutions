// Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//Given a card with a suit. I will have to return the name of the suit in a string. 
//I will not be given a negative number, floats, or zeros. It will just be the string. 
// It will take in the card as an argument. 

//I will use the split method to separate out the string and put it into an array. Then I will use index notation to use it in a conditional for each suit.
//If the suit is truthy, It will returen the name of the  correct suit as a string. 

function defineSuit(card) {
    //Split into an array. 
   let arr= card.split("")
   //conditional for 2nd item in array compare to the suit. 
   //Changed it to last index because some numbers might be 2 digits. 
    if(arr[arr.length-1]=== '♠'){
        return 'spades'
    }else if (arr[arr.length-1] === '♦'){
        return 'diamonds'
    }else if (arr[arr.length-1] === '♥'){
        return "hearts"
    }else if (arr[arr.length-1]=== '♣'){
        return "clubs"
    }
  }

  console.log(defineSuit('Q♠'))// 'spades'));
  console.log(defineSuit('9♦'))// 'diamonds'));
  console.log(defineSuit('J♥'))// 'hearts'));

