const board = document.querySelector('#board')
const SQUARE_NUMBER = 450//Константа  большими буквами

for(let i = 0; i < SQUARE_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    board.append(square)
}

