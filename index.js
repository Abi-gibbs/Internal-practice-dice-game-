//
console.log('Welcome to my dice game!')
let rounds = prompt('How many rounds do you want to play?')

if (isNaN(rounds)) {
  console.log ('Invalid input please enter a number')
 rounds = prompt('How many rounds do you want to play?')

}


let round = 0 
let pointPlayer1 = 0 
let pointPlayer2 = 0 

// let dice1 = Math.floor(Math.random() * 6 + 1)
// let dice2 = Math.floor(Math.random() * 6 + 1)

do {

let dice1 = Math.floor(Math.random() * 6 + 1)
let dice2 = Math.floor(Math.random() * 6 + 1)

let play = prompt ('Player1 do you want to roll the dice')
if (play == 'yes' || 'y' || 'ye' || 'ok'){
  //  let dice1 = Math.floor(Math.random() * 6 + 1)
  console.log('you rolled a ' + dice1)
}

else if (play == 'no' || 'nah' || 'n' || 'no thanks'){
  console.log('ok bye')
  break 
}

else {
  console.log('invalid input please re-enter answer')
 let play = prompt ('Player1 do you want to roll the dice')
}


let play2 = prompt ('Player2 do you want to roll the dice')
if (play2 == 'yes' || 'y' || 'ye' || 'ok'){
  console.log('you rolled a ' + dice2)
}
else if (play2 == 'no' || 'nah' || 'n' || 'no thanks'){
  console.log('ok bye')
break 
}
else {
  console.log('invalid input please re-enter answer')
  let play2 = prompt ('Player2 do you want to roll the dice')
if (play == 'yes' || 'y' || 'ye' || 'ok'){
  console.log('you rolled a ' + dice2)
}

}
round ++


if (dice1 > dice2){
  console.log('player1 wins')
  pointPlayer1 ++
}
else if (dice1 < dice2) {
  console.log('player2 wins')
  pointPlayer2 ++
}
else { 
  console.log('It is a draw')
}

} while (round < rounds)



console.log( 'Player1 has ' + pointPlayer1 + ' points ' +'points and Player2 has '+ pointPlayer2 + ' points' )
