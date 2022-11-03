const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let timerId = null
let currentTime = 30

//Remove mole to start the game
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
//Add mole to random square
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
        result++
        score.innerHTML = result
        hitPosition = null
    } 
  })  
})

//Timer to move the mole
function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

moveMole()
//Timer
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Final Score ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)