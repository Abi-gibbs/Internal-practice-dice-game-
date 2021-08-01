//
var rounds = prompt('How many rounds do you want to play?')



let round = 0 
let pointPlayer1 = 0 
let pointPlayer2 = 0 

let dice1 = Math.floor(Math.random() * 6 + 1)
let dice2 = Math.floor(Math.random() * 6 + 1)

do {


var play = prompt ('Player1 do you want to roll the dice')
if (play == 'yes'){
   let dice1 = Math.floor(Math.random() * 6 + 1)
  console.log('you rolled a ' + dice1)
}
else if (play == 'no'){
  console.log('ok bye')
}
else {
  console.log('invalid input please re-enter answer')
 var play = prompt ('Player1 do you want to roll the dice')
}

var play2 = prompt ('Player2 do you want to roll the dice')
if (play2 == 'yes'){
 let dice2 = Math.floor(Math.random() * 6 + 1)
  console.log('you rolled a ' + dice2)
}
else if (play2 == 'no'){
  console.log('ok bye')
}
else {
  console.log('invalid input please re-enter answer')
  var play2 = prompt ('Player2 do you want to roll the dice')
}

if (dice1 > dice2){
  console.log('player1 wins')
  pointPlayer1 ++
}
else if (dice1 < dice2) {
  console.log('player2 wins')
  pointPlayer2 ++
}
else if (dice1 = dice2){ 
  console.log('It is a draw')
}
round ++
}

while (round < rounds )

console.log( 'Player1 has ' + pointPlayer1 + ' points ' +'points and Player2 has '+ pointPlayer2 + ' points' )
