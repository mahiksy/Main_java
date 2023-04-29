let userScore = 0;
let useroption = 0;
let pcScore = 0;
let actions ={
    1: "rock",
    2: "paper",
    3: "scissors"
}

let computerGame= function(){
    let randomNumber= Math.floor(Math.random() * (3) + 1);
    return randomNumber;
}

function playRound(useroption, computer){
    let msg = ""
    if(useroption===computer){
        msg = `It's a tigh!`
    }
    else if(useroption>computer && useroption!=3){
        msg = `You Scored. ${actions[useroption]} beats ${actions[computer]}!`
        userScore++;
    }
    else if(useroption==1 && computer==3){
        msg = `You Scored. ${actions[useroption]} beats ${actions[computer]}!`
        userScore++;
    }
    else{
        msg = `You Lost. ${actions[computer]} beats ${actions[useroption]}!`
        pcScore++;
    }
    return msg;
}

function checkWin(){
    let message="";
    if(userScore>pcScore) message = "You Won! Congrats!"
    else if(userScore==pcScore) message = "It's tigh! Nice Try!"
    else message="You Lost!"
    return message;
}

function game(){
    let i = 0;
    let repeat = false;
    let userInt = 0;
    while(i<5){
       do{
          let userInput = prompt("Please type Rock,Paper,Or scissors to start the game:");
          for(let x=1;x<4;x++){
            if(userInput.toLocaleLowerCase() == actions[x]){
                userInt = x;
                repeat = false;
                break;
            }
          }
          if(userInt == 0){
            repeat = true;
            console.log("Wrong Input, Please try again!")
          }
       }while(repeat)
       let pc = computerGame();
       let res = playRound(userInt,pc);
       console.log(res);
       if(res !="It's a tigh!") i++;
    }
    console.log(checkWin());
}

game();