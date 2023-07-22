import { 
    snakeSpeed, 
    updateSnake, 
    drawSnake, 
    getSnakeHead, 
    snakeIntersection 
} from "./snake.js"
import { updateFood , drawFood } from "./food.js"
import { outsideGrid } from "./grid.js"

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
document.querySelector("#game-arrow-up").addEventListener('click', () => console.log('up'))
document.querySelector("#game-arrow-left").addEventListener('click', () => console.log('left'))
document.querySelector("#game-arrow-right").addEventListener('click', () => console.log('right'))
document.querySelector("#game-arrow-down").addEventListener('click', () => console.log('down'))

function main(currentTime) {
    // Check losing conditions
    if (gameOver) {
        if (confirm('You lost, press ok to restart')) {
            window.location = '/'
        }
        return
    }

    //Animate and Draw Snake
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
