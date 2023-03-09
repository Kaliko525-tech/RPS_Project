let computerSelection = undefined;
let playerScore = 0;
let computerScore = 0;
let playerInput = undefined;

const results = document.getElementById('result')
const score = document.getElementById('score')
const winner = document.getElementById('winner')
const btn = document.querySelectorAll("button")

getComputerChoice()

btn[0].addEventListener('click', () => play('rock',))
btn[1].addEventListener('click', () => play('paper'))
btn[2].addEventListener('click', () => play('scissors'))

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
    getComputerChoice()

    if (playerSelection == 'rock' && computerSelection == 'scissors' ) {
        results.textContent = 'You win! Rock beats scissors.'

        return playerScore++;
    }

    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        results.textContent = 'You lose! Paper beats rock.' 
        return computerScore++;
    }

    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        results.textContent = 'You win! Scissors beats paper.'

        return playerScore++;
    }
    
    else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        results.textContent = 'You lose! Rock beats scissors.'

        return computerScore++;
    }

    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        results.textContent = 'You win! Paper beats rock.'

        return playerScore++
    }

    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        results.textContent = 'You lose! Scissors beats paper.'

        return computerScore++;
    }
    else if(playerSelection == computerSelection)
        results.textContent = 'Whoah! It\'s a tie! Nobody Wins!'
    else {
        results.textContent = 'error'
    }

}

function showWinner () {
    if (playerScore === 5) {
        winner.textContent = "YOU WIN!"
    }

    else if (computerScore === 5){
        winner.textContent = "YOU LOSE!"
    }

    else if (playerScore === 5 && computerScore === 5) {
        winner.textContent = "It's a tie!"
    }
    else{

    }
}

function restart(){
    input = prompt('Do you want to play again?')
    if (input === 'yes'){
        location.reload()
    }
    else {
        alert('Thanks for playing!')
    }
}   

function showScore(){
    score.textContent = `Player score: ${playerScore} - ${computerScore} : Computer Score`
}

function play(selection) {
    playRound(selection , computerSelection)
    showScore()
    if (playerScore === 5 || computerScore === 5){
        showWinner()
        //restart()
 }
}