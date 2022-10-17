# RPS_Project
A simple web/JS console rock-paper-scissors game.

I am going to use this section to write my pseudocode for now.

* outcome:
 a game that is played by a user against a computer. 
 
 the user will input their choice.
 
 the computer will randomly select their choice
 
 the computer will compare the users choice and their own choice and output the outcome of the game based on a set of rules. 

 the outcome of the game will be displayed with a reason why.

 we want to be able to make the game play for 5 consecutive games and keep score of the games and at the end of the 5 games output the scores of both computer and user and display who won the round.

* Break it down:

    1. we need to create a function that gets the computer to randomly select 'rock' , 'paper' , or 'scissors' and return its choice.

    2. we need to create a prompt that tells the player to input 'rock', 'paper', or 'scissors' and make it case in-sensitive. Then store its choice.

    3. we need to compare the two choices against each other and output a outcome for the game. to which the rules are "rock beats scissors" ; "paper beats rock" ; "scissors beats paper". the outcome will display if the user lost or won the game and why(it will refrence the rules)

    4. we need to then store the score of the game, and keep the score of 5 consecutive games to be compared at the end and prompt who won the round. a round being based on 5 games. (i would like to make it play best out of 5,  stopping the round after someone wins 3 games but lets see how we do.)

Step 1:

creating a function called 'getComputerChoice', 

does it need parameters? a number randomly chosen between 0-2.

how to randomly select a string = use a switch statement/trying not to cheat and just copy an answer, gonna figure out how to randomly select a case in the switch statement, will revise this before implementing. 

use math.floor(Math.random()*3) // thought iwas called get number but this is what we want. math.random will get a number between 0 and 1, but will always be below one. so we use math.floor to round it down. we then times the math random function to give a number close to what we want.

choice is stored in a variable called 'computerSelection'

needs to be a variable? yes.

store and return string selected.

step 2:

create a function called 'getPlayerChoice' that creates a prompt window. use 'prompt(enter text here)'.

regex for prompt = (rock\paper\scissors/i) <-- something like that will go over it later.

store input value in a variable? constant? called 'playerSelection'

step 3:

create a funcntion called "playRound"

takes two parameters - 'computerSelection' , 'playerSelection'

the function compares the 'playerSelection' to the 'getComputerChoice'

function (playerSelection \i, computerSelection) {
    if (playerSelection = 'rock' && computerSelection = 'scissors' ) {
        alert('You win! Rock beats scissors.')
    }

    else if (playerSelection = 'rock' && computerSelection = 'paper') {
        alert('You lose! Paper beats rock.' )
    }

    else if(playerSelection = 'scissors' && computerSelection = 'paper'){
        alert('You win! Scissors beats paper.')
    }
    
    else if(playerSelection = 'scissors' && computerSelection = 'rock') {
        alert('You lose! Rock beats scissors.')
    }

    else if(playerSelection = 'paper' && computerSelection = 'rock'){
        alert('You win! Paper beats rock.')
    }

    else if(playerSelection = 'paper' && computerSelection = 'scissors'){
        alert('You lose! Scissors beats paper.')
    }

    else {
        alert('Whoah! It\'s a tie! Nobody Wins!')
    }
}

hopefully this works. // It did not work but with some slight re-work i got it to work.//

just need to figure out how to now make it take a score. --> will implement this once i get there. //Figured it out, created a variable called 'playerScore' and 'computerScore' set them to 0. in each if...else statement i incremented the score as needed.//

step 4: 

use a loop to play 5 rounds


3/10/22 --> started to implement the js got alot done and seems to be working well,just need to figure out how to make 'playerSelection' case insensitive. then work on step 4.

4/10/22 --> researched and discovered how to make the 'playerInput' case sensitive, it was simply to pass that string through a lowerCase tag. so implemented that. 

had some trouble getting the loop to show the prompt each round. but i figured it out and i just had to re-arrange some scripts and create a variable called 'playerInput' leave it undefined and use that variable in the loop, also had to call the function 'getComputerChoice' in there. 

also figured out how to display the score. used a alert with a template literal.

so i have got the game working and that was my main focus while i was implementing the steps that i wrote out in my pseudocode, but now looking over the assignment i see i need to do the following:

1. make everything work in the console, i.e. change alerts to console.log.

17/10/22

Papa passed away so i had to take a little break to mentally recover from that,but im back now and getting back into the studying and the project. hoping to finish it off todday, I wasnt far off i just needed to get everything to work in the comsole. lets see how that goes.