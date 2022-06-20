// Rock Paper Scissors!

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!


const rps = (p1, p2) => {
    let mes1 = "Player 1 won!"
    let mes2 = "Player 2 won!"
    let mes3 = "Draw!"
    if(p1 === "scissors" && p2 ==="rock"){
      return mes2
    }else if (p1 ==="scissors" && p2 === "paper"){
       return mes1     
    }else if (p1 === "scissors" && p2 ==="scissors"){
      return mes3
    }else if (p1 === "rock" && p2 === "scissors"){
      return mes1
    }else if (p1=== "rock" && p2 === "paper"){
      return mes2
    }else if (p1 === "rock" && p2 === "rock"){
      return mes3
    }else if(p1 === "paper" && p2 === "rock"){
      return mes1
    }else if (p1 === "paper" && p2 === "scissors"){
      return mes2
    }else if (p1 === "paper" && p2 === "paper"){
      return mes3
    }
  };