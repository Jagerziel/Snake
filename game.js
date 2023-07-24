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
import { inputDirection , lastInputDirection } from "./input.js"

let lastRenderTime = 0
export let gameOver = false
const gameBoard = document.getElementById('game-board')
localStorage.setItem("score", "0");

document.getElementById("game-btn-play").addEventListener('click', () => {
    main()
    document.getElementById("game-score").innerHTML = "Score: 0"
    localStorage.setItem("score", "0");
    localStorage.setItem("snakeheadRotate", "0")
})


function runGame () {
    gameOver = false
    resetGame()    
}

runGame()

function resetGame () {
    snakeBody.splice(0, snakeBody.length, { x: 11 , y: 11 })
    inputDirection.x = 0
    inputDirection.y = 0
    lastInputDirection.x = 0
    lastInputDirection.y = 0
    // document.querySelector(".snakehead").style.transform = rotate("0deg")
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
    if (secondsSinceLastRender < 1 / ((snakeSpeed * 2) + 3)) return
    lastRenderTime = currentTime
    // console.log(snakeBody)
    
    document.getElementById("game-btn-play").innerHTML = "Feed Me"
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
