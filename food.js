import { onSnake , expandSnake } from "./snake.js"

let food = { x: 10 , y: 1 }
const expansionRate = 5

export function updateFood() {
    if (onSnake(food)) {
        expandSnake(expansionRate)
        food = { x: 20, y: 10 }
    }
}

export function drawFood( gameBoard ) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}
