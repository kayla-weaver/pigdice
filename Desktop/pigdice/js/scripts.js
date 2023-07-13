//Business Logic

function Player(name){
    this.name = name;
    this.totalScore = 0;
    this.currentScore =0;
    this.diceRoll = undefined;
    this.playerTurn = false;
}

function rollDice(){
 return Math.floor(Math.random() * 6) +1;
}

Player.prototype.roll = function(rollNow) {
  return Math.floor(Math.random() * 6) + 1;
}





//UI Logic

window.onload = function(){
    let roll = document.getElementById("roll-dice");
    
    roll.onclick = function(){
      const currentScore = document.getElementById("current-score");
      currentScore.innerText = rollDice();

    }
}






// class Player{
//     constructor(name){
//         this.name =name;
//     }

//     totalScore= 0;
//     currentScore =0;
//     diceRoll;
//     playerTurn = false;

// rollDice(){
//     this.diceRoll = Math.floor(Math.random() * 6) +1;
// }
// }




// Roll, player switch (Hold/Bust), total score, current score, add player //