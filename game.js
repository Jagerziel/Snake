import { snakeSpeed , updateSnake , drawSnake }from "./snake.js"
import { updateFood , drawFood } from "./food.js"

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update () {
    updateSnake()
}

function draw () {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
}

