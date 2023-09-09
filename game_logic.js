/* let playerText=document.getElementById('playerText')
let restartBtn =document.getElementById('restartBtn')
let boxes=Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
const O_TEXT="O";
const X_TEXT="X";
let currentPlayer =X_TEXT
let spaces=Array(9).fill(null)
let winningLineCanvas = document.getElementById('winningLineCanvas');
let ctx = winningLineCanvas.getContext('2d');

const startGame=() =>{
    boxes.forEach(box =>box.addEventListener("click",boxClicked));
}
function boxClicked(e){
    const id=e.target.id
    if(spaces[id]){
        spaces[id]=currentPlayer
        e.target.innerText=currentPlayer

    if(playerHasWon() !==false) {
        playerText= '${currentPlayer} has won!';
        let winning_blocks = playerHasWon()
winning_blocks.map(box => boxes[box].computedStyleMap.backgroudColor=winnerIndicator)
drawWinningLine(winning_blocks);
return
    }
        currentPlayer= currentPlayer ==X_TEXT? O_TEXT : X_TEXT
    }
}
const winningCombos =[ 
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

function playerHasWon(){
for (const condition of winningCombos){
    let[a, b, c] = condition
    if(spaces[a]&& (spaces[a] == spaces[b] )&& spaces[a] == spaces[c]){
    return [a,b,c]
}
}
return false
}
function drawWinningLine(winningBlocks) {
    const [a, b, c] = winningBlocks;
    const startX = (a % 3 + 0.5) * 100;
    const startY = (Math.floor(a / 3) + 0.5) * 100;
    const endX = (c % 3 + 0.5) * 100;
    const endY = (Math.floor(c / 3) + 0.5) * 100;
  
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.stroke();
  }
restartBtn.addEventListener("click",restart)
function restart(){
    spaces.fill(null)

    boxes.forEacch(box =>{
        box.innerText=" "
        box.style.backgroundColor= ""
    });
    ctx.clearRect(0, 0, winningLineCanvas.width, winningLineCanvas.height);
    playerText ="Tic Tac toe"
    currentPlayer=X_TEXT
}

startGame() */


let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)


const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
            
        }
        else if (isTie()) {
            playerText.innerHTML = "It's a tie!"
        } 
else{
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
}
    }
}
function isTie() {
    return spaces.every(space => space !== null)
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}


restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'

    currentPlayer = X_TEXT
}

startGame()