import { snakeSpeed , updateSnake , drawSnake }from "./snake.js"
import { updateFood , drawFood } from "./food.js"

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    // Check losing conditions
    if (gameOver) {
        return alert('you lose')
    }

    //Animate and Draw Snake
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime

    update()
    draw()
}

// window.requestAnimationFrame(main)

function update () {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw () {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
