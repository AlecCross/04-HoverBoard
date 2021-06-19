const board = document.querySelector('#board')
const SQUARE_NUMBER = 500//Константа  большими буквами

for(let i = 0; i < SQUARE_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

square.addEventListener('mouseover', () => {
    console.log("mouseover")
    setColor(square)
})

    board.append(square)
}

function setColor(element){
    element.style.background = 'red'
}

