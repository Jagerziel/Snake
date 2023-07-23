import { getInputDirection } from "./input.js"

export let snakeSpeed = 3
const snakeBody = [{ x: 11 , y: 11 }]
let newSegments = 0

// Event Listeners to Handle Snake Speed Changes
document.getElementById("game-button-snakespeed-plus").addEventListener('click', () => updateSnakeSpeed("increase"))
document.getElementById("game-button-snakespeed-minus").addEventListener('click', () => updateSnakeSpeed("decrease"))

function updateSnakeSpeed(command) {
    if ( command === "increase") {
        if (snakeSpeed < 10) {
            snakeSpeed++
            document.querySelector(".game-snakespeed-value").innerHTML = snakeSpeed
            // console.log(snakeSpeed)
        }
    } 
    if (command === "decrease") {
        if (snakeSpeed > 1) {
            snakeSpeed--
            document.querySelector(".game-snakespeed-value").innerHTML = snakeSpeed
            // console.log(snakeSpeed)
        }
    }
}

export function updateSnake() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

}

export function drawSnake( gameBoard ) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position , { ignoreHead = false } = {} ) {
    return snakeBody.some(( segment , index ) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment , position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}


function equalPositions( position01 , position02 ) {
    return position01.x === position02.x && position01.y === position02.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
        //ALTERNATIVE APPROACH BELOW:
        // snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1]}
    }
    newSegments = 0
}
