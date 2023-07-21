import { onSnake , expandSnake } from "./snake.js"
import { getRandomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
const expansionRate = 5

export function updateFood() {
    if (onSnake(food)) {
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }
}

export function drawFood( gameBoard ) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = getRandomGridPosition()
    }
    return newFoodPosition
}

