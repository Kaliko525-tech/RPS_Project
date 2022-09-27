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
does it need parameters? no 
how to randomly select a string = use a switch statement/trying not to cheat and just copy an answer, gonna figure out how to randomly select a case in the switch statement, will revise this before implementing. 
needs to be a variable? no.
return string selected. 