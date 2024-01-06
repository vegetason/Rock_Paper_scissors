function getComputerChoice(){
    let x=Math.floor(Math.random()*3)+1;
    if (x===1) return 'rock';
    else if(x===2) return 'paper';
    else if(x===3) return 'scissors';
}
function playRound(playerSelection,computerSelection){
  if(playerSelection===computerSelection) return 'it is a tie';
  else if(playerSelection==='scissors' && computerSelection==='paper') return 'player won'
  else if(playerSelection==='rock' && computerSelection==='paper') return 'computer won';
  else if(playerSelection==='paper' && computerSelection==='rock') return 'player won'
  else if(playerSelection==='scissors' && computerSelection==='rock') return 'computer won'
  else if(playerSelection==='paper' && computerSelection==='scissors') return 'computer won'
  else if(playerSelection==='rock' && computerSelection==='scissors') return 'player won'
};
function game(){
    let p=0,c=0;
    for(let i=0;i<5;i++){
        let playerSelection=prompt('enter your choice');
        let computerSelection=getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if(playRound(playerSelection,computerSelection)==='player won') p++;
        else if(playRound(playerSelection,computerSelection)==='computer won') c++;
        console.log(p,c)
    }
    if(p>c) return `Player won, the score is ${p}:${c}`;
    else if(c>p) return `Computer won, the score is ${p}:${c}`;
    else if(c===p) return 'It\'s a miraculous tie'
}
console.log(game());