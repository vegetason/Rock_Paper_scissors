function theGame(){
    let paper=document.querySelector('#paper')
let rock=document.querySelector('#Rock')
let scissors=document.querySelector('#scissors')
let playerSelection;
let screen=document.querySelector('#screen')
let nbrOfRounds=0;
let playerWins=0;
let compWins=0;
let selection=document.createElement('p')
let theWinner=document.createElement('p')
screen.appendChild(selection)
screen.appendChild(theWinner)
paper.addEventListener('click',()=>{
    playerSelection='paper';
    nbrOfRounds++;
    game();
})
rock.addEventListener('click',()=>{
    playerSelection='rock';
    nbrOfRounds++
    game();
})
scissors.addEventListener('click',()=>{
    playerSelection='scissors';
    nbrOfRounds++;
    game();
})
function getComputerChoice(){
    let x=Math.floor(Math.random()*3)+1;
    if (x===1) return 'rock';
    else if(x===2) return 'paper';
    else if(x===3) return 'scissors';
}
function playRound(playerSelection,computerSelection){
  if(playerSelection===computerSelection) {
    selection.textContent=`computer Selection is ${computerSelection} and playerSelection is ${playerSelection}`
    theWinner.textContent='it is a tie.'
    return 'it is a tie';
  }
  else if(playerSelection==='scissors' && computerSelection==='paper') {
    selection.textContent=`computer Selection is ${computerSelection} and playerSelection is ${playerSelection}`
    theWinner.textContent='player won';
    return 'player won';
  }
  else if(playerSelection==='rock' && computerSelection==='paper') {
    selection.textContent=`computer Selection is ${computerSelection} and playerSelection is ${playerSelection}`
    theWinner.textContent ='computer won';
    return 'computer won';
  }
  else if(playerSelection==='paper' && computerSelection==='rock') {
    selection.textContent=`computer Selection is ${computerSelection} and playerSelection is ${playerSelection}`
    theWinner.textContent='player won';
    return 'player won'
  }
  else if(playerSelection==='scissors' && computerSelection==='rock'){
    selection.textContent=`computer Selection is ${computerSelection} and playerSelection is ${playerSelection}`
    theWinner.textContent ='computer won';
    return 'computer won';
  }
  else if(playerSelection==='paper' && computerSelection==='scissors'){
    selection.textContent=`computer Selection is ${computerSelection} and playerSelection is ${playerSelection}`
    theWinner.textContent ='computer won';
    return 'computer won';
  }
  else if(playerSelection==='rock' && computerSelection==='scissors'){
    selection.textContent=`computer Selection is ${computerSelection} and playerSelection is ${playerSelection}`
    theWinner.textContent='player won';
    return 'player won';
  }
};
function game(){
    let computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    if(playRound(playerSelection,computerSelection)==='player won') playerWins++;
    else if(playRound(playerSelection,computerSelection)==='computer won') compWins++;
    if(nbrOfRounds===5){
        if(playerWins>compWins) screen.textContent= `Player won, the score is ${playerWins}:${compWins}`;
        else if(playerWins<compWins) screen.textContent =`Computer won, the score is ${playerWins}:${compWins}`;
        else if(playerWins===compWins) screen.textContent='It\'s a miraculous tie';
        nbrOfRounds=0;
        playerWins=0; 
        compWins=0;
        theGame();
    }
}
}
theGame();