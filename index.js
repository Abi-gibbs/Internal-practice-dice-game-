play();
function play(){

let player1 = prompt('What is your name') 

question();
function question(){
var play = prompt (player1 + ' do you want to roll the dice')
}
if (play == 'yes'){
  roll();
}
else if (play == 'no'){
  console.log('ok bye')
}
else {
  console.log('invalid input please re-enter answer')
  question();
}
function roll(){
  let dice1 = Math.floor(Math.random() * 6 + 1)
  console.log('you rolled a ' + dice1)
}
}



