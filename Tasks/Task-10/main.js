function determineWinner(getUserChoice, getcomputerChoice) 
{
   if (getUserChoice === getcomputerChoice)
      {
        return 'The game is a tie!';
      } // closing if tie clause!!!
   else if (getUserChoice === 'rock') 
     {
        if (getcomputerChoice === 'paper') 
          {
            return 'Computer Won!';
          }
        else 
          {
           return 'You won!';
          } 
      }
   else if (getUserChoice === 'scissors') 
     {
        if (getcomputerChoice === 'rock') 
         {
           return 'The Computer won!';
         } 
        else 
         {
           return 'You won!';
         }
      } 
   else if (getUserChoice === 'paper') 
     {
       if (getcomputerChoice === 'scissors') 
         {
           return 'The Computer won!';
         } 
       else 
         {
           return 'You won GREAT !';
         }
      }
}
 
function playGame(){
     getUserChoice = "scissors";
     getcomputerChoice = "paper";
    return determineWinner(getUserChoice, getcomputerChoice);
}

console.log(playGame());