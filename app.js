const board = document.querySelector('#board')
const colors = ['magenta','green','orange','yellow']
const SQUARE_NUMBER = 500//Константа  большими буквами

for(let i = 0; i < SQUARE_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

square.addEventListener('mouseover', () => {
    setColor(square)
})

square.addEventListener('mouseleave', () => {
    removeColor(square)
})

    board.append(square)
}

function setColor(element){
    const color = getRandColor()
    element.style.background = color
}

function removeColor(element){
    element.style.background = '#1d1d1d'
}

function getRandColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

