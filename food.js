import { onSnake , expandSnake } from "./snake.js"
import { getRandomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
export let expansionRate = 1

// Event Listeners to Handle Snake Speed Changes
document.getElementById("game-button-snakelength-plus").addEventListener('click', () => updateExpansionRate("increase"))
document.getElementById("game-button-snakelength-minus").addEventListener('click', () => updateExpansionRate("decrease"))

function updateExpansionRate(command) {
    if ( command === "increase") {
        if (expansionRate < 5) {
            expansionRate++
            document.querySelector(".game-snakelength-value").innerHTML = expansionRate
            // console.log(expansionRate)
        }
    } 
    if (command === "decrease") {
        if (expansionRate > 1) {
            expansionRate--
            document.querySelector(".game-snakelength-value").innerHTML = expansionRate
            // console.log(expansionRate)
        }
    }
}



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

