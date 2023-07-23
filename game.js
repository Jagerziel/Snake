import { 
    snakeSpeed, 
    updateSnake, 
    drawSnake, 
    getSnakeHead, 
    snakeIntersection,
    snakeBody
} from "./snake.js"
import { updateFood , drawFood } from "./food.js"
import { outsideGrid } from "./grid.js"

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
export let startGame = false

function runGame () {
    gameOver = false
    resetGame()
    document.getElementById("game-btn-play").addEventListener('click', () => 
    (window.requestAnimationFrame(main)))
}

runGame()

function resetGame () {
    snakeBody.splice(0, 0, { x: 11 , y: 11 })

}


function main(currentTime) {
    // Check losing conditions
    if (gameOver) {
        document.getElementById("game-btn-play").innerHTML = "Play Again"
        runGame()

        return
    }

    //Animate and Draw Snake
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime
    console.log(currentTime)
    
    update()
    draw()
}

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
