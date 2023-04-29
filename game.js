let userScore = 0;
let useroption = 0;
let pcScore = 0;
let actions ={
    1: "rock",
    2: "paper",
    3: "scissors"
}

let computerGame = function(){
    let randomNumber = Math.floor(Math.random() * (3) + 1);
    return randomNumber;
}

function playRound(useroption, computer){
    if(actions[useroption] === actions[computer]){
        return `It's a tigh!`
    }
    else if(actions[useroption] > actions[computer] && actions[useroption] != 3){
        userScore++;
        return `You Scored. ${actions[useroption]} beats ${actions[computer]}!`
    }
    else if (actions[useroption] == "scissors" && actions[computer] == "paper"){
        userScore++;
        return `You Scored. ${actions[useroption]} beats ${actions[computer]}!`
    }
    else if(actions[useroption] == "rock" && actions[computer] == "scissors"){
        userScore++;
        return  `You Scored. ${actions[useroption]} beats ${actions[computer]}!`
    }
    else{
        pcScore++;
        return  `You Lost. ${actions[computer]} beats ${actions[useroption]}!`
    }
}

function checkWin(){
    if(userScore>pcScore){
        return "You Won! Congrats!";
    } 
    else if(userScore==pcScore){
        return "It's tigh! Nice Try!";
    }
    else{
        return "You Lost!";
    }
}

function game(){
    let i = 0;
    let repeat = false;
    let userInt = 0;
    for(let i=0;i<5;i++){
       do{
          let userInput = prompt("Please type Rock,Paper,Or scissors to start the game:");
          if(userInput == "rock" || userInput == "scissors" || userInput == "paper"){
            repeat = false;
          }
          else{
            repeat = true;
            console.log("Wrong Input, Please try again!")
          }
       }while(repeat)
       let pc = computerGame();
       console.log(playRound(userInt,pc));
       if(res !="It's a tigh!") i++;
    }
    console.log(checkWin());
}

game();