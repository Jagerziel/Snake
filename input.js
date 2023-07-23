let inputDirection = { x: 0 , y: 0 }
let lastInputDirection = { x: 0 , y: 0 }

window.addEventListener('keydown', (e) => updateDirection(e.key))
document.querySelector("#game-arrow-up").addEventListener('click', () => updateDirection("ArrowUp"))
document.querySelector("#game-arrow-left").addEventListener('click', () => updateDirection("ArrowLeft"))
document.querySelector("#game-arrow-right").addEventListener('click', () => updateDirection("ArrowRight"))
document.querySelector("#game-arrow-down").addEventListener('click', () => updateDirection("ArrowDown"))

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}

function updateDirection ( e ) {
    switch(e) {
        case 'ArrowUp': 
            if (lastInputDirection.y !== 0 ) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown': 
            if (lastInputDirection.y !== 0 ) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0 ) break 
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight': 
            if (lastInputDirection.x !== 0 ) break
            inputDirection = { x: 1, y: 0 }
            break
    }
}
