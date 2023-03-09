let computerSelection = undefined;
let playerScore = 0;
let computerScore = 0;
let playerInput = undefined;
const results = document.getElementById('result')
const score = document.getElementById('score')
const winner = document.getElementById('winner')
const btn = document.querySelectorAll("button")



function getComputerChoice(){
switch (Math.floor(Math.random() * 3))
{
    case 0:
        
   computerSelection = 'rock'
    break;

    case 1:

   computerSelection = 'paper'
    break;

    case 2:

    computerSelection = 'scissors'
    break;
}
} 

function playRound (playerSelection , computerSelection) {

    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection == 'rock' && computerSelection == 'scissors' ) {
        console.log('You win! Rock beats scissors.')

        return playerScore++;
    }

    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('You lose! Paper beats rock.' )

        return computerScore++;
    }

    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log('You win! Scissors beats paper.')

        return playerScore++;
    }
    
    else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('You lose! Rock beats scissors.')

        return computerScore++;
    }

    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You win! Paper beats rock.')

        return playerScore++
    }

    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log('You lose! Scissors beats paper.')

        return computerScore++;
    }
    else if(playerSelection == computerSelection)
        console.log('Whoah! It\'s a tie! Nobody Wins!')
    else {
        results.textContent = 'error'
    }

}

//function game (){
//    for (let i= 0; i<5; i++){
//    getComputerChoice()
//    playerInput = prompt('Input rock, paper, or scissors.');
//    playerSelection = playerInput.toLowerCase() ;
//    playRound(playerSelection , computerSelection)
//}
//}

function showWinner () {
    if (playerScore > computerScore) {
        console.log(`You beat the computer! Your Score is - ${playerScore} vs ${computerScore} - Computer Score!` )
    }

    else if (computerScore > playerScore){
        console.log(`The computer beat you! You Lose! Computer score - ${computerScore} vs ${playerScore} - Your Score!`)
    }

    else {
        console.log("It's a tie!")
    }
}

function rePlay() {
    input = prompt('Do you want to play again?');
    if (input=="yes"){
        location.reload()
    }
    else{
        console.log('Thanks for playing!')
    }
}

//game()
//showWinner()
//rePlay()
