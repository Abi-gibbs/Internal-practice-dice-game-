//
play();
function play(){
let pointPlayer1 = 0 
let pointPlayer2 = 0 

question();
function question(){
var play = prompt ('Player1 do you want to roll the dice')
if (play == 'yes'){
  roll();
}
else if (play == 'no'){
  console.log('ok bye')
}
else {
  console.log('invalid input please re-enter answer')
  question();
}}
function roll(){
  let dice1 = Math.floor(Math.random() * 6 + 1)
  console.log('you rolled a ' + dice1)
}
}

play2();
function play2(){


question2();
function question2(){
var play2 = prompt ('Player2 do you want to roll the dice')
if (play2 == 'yes'){
  roll1();
}
else if (play2 == 'no'){
  console.log('ok bye')
}
else {
  console.log('invalid input please re-enter answer')
  question();
}}
function roll1(){
  let dice1 = Math.floor(Math.random() * 6 + 1)
  console.log('you rolled a ' + dice1)
}
if (roll > roll1){
  console.log('player1 wins')
}
else {
  console.log('It is a draw')
}
}
