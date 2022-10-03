let computerSelection = undefined;
let playerScore = 0;
let computerScore = 0;

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


getComputerChoice();



function playRound (playerSelection , computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors' ) {
        alert('You win! Rock beats scissors.')

        return playerScore++;
    }

    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        alert('You lose! Paper beats rock.' )

        return computerScore++;
    }

    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        alert('You win! Scissors beats paper.')

        return playerScore++;
    }
    
    else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        alert('You lose! Rock beats scissors.')

        return computerScore++;
    }

    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        alert('You win! Paper beats rock.')

        return playerScore++
    }

    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        alert('You lose! Scissors beats paper.')

        return computerScore++;
    }

    else {
        alert('Whoah! It\'s a tie! Nobody Wins!')
    }

}

playerSelection = prompt('Input Rock, paper, or scissors.') ;

playRound(playerSelection , computerSelection)