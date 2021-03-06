const board = document.querySelector('#board')
const colors = ['#FFFF00','#7CFC00','#FF00FF','#00FFFF', '#F0F8FF']
const SQUARE_NUMBER = 600//Константа  большими буквами

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
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #1d1d1d'
}

function getRandColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

