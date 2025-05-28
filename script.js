// BOX CLICK
const boxes = document.querySelectorAll('#box')
let computerTurn = false;
function activeComputer(){
    computerTurn=true;
}
function deactiveComputer(){
    computerTurn=false;
}
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        changeTurn(box);
        checkWin();
        if(computerTurn){
            computer();
        }
    })
})




// CHANGING TURN
const turn = document.querySelectorAll('#turnx, #turno')
let turnX = true;
function changeTurn(box) {
    if (turnX) {
        box.disabled;
        box.value = 'X';
        box.style.webkitTextStrokeColor = '#F2135A';
        turnX = false;
        turn[1].style.display = 'block'
        turn[0].style.display = 'none'
    }
    else {
        box.disabled;
        box.value = 'O'
        box.style.webkitTextStrokeColor = '#F8CE35';
        turnX = true;
        turn[0].style.display = 'block'
        turn[1].style.display = 'none'
    }
    box.disabled = true;
}



//  CHECK WINNING
const winPattern = [
    [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [0, 4, 8],
    // [2, 4, 6]
]
const page3 = document.getElementById('page3');
const msgBox = document.getElementById('msgBox');
function checkWin() {
    for (let pattern of winPattern) {
        const val1 = boxes[pattern[0]].value;
        const val2 = boxes[pattern[1]].value;
        const val3 = boxes[pattern[2]].value;


        if (val1 != "" && val1 == val2 && val2 == val3) {
            for (box of boxes) {
                box.disabled = true;
            }
            page3.style.top = 0;
            msgBox.innerHTML = val1 + " has won"

            for (let index of pattern) {
                boxes[index].style.webkitTextStrokeColor = "lightgreen";
            }
            return;
        }

    }
    handleTie();
}


function handleTie() {
    let count = 0;
    boxes.forEach((box) => {
        if (box.value != "") {
            count++;
        }

        if (count == 9) {
            page3.style.top = 0;
            msgBox.innerHTML = "Match tie"
            return;
        }
    })
    

}








// COMPUTER PLAYING
let count2 = 0;
function computer() {

    
    
    const rand = Math.floor(Math.random() * 9);
    if (boxes[rand].value == "") {
        boxes[rand].disabled = true;
        boxes[rand].value = 'O'
        boxes[rand].style.webkitTextStrokeColor = '#F8CE35';
        turnX = true;
        turn[0].style.display = 'block'
        turn[1].style.display = 'none'
        checkWin();
        count2++;
    }
    else if(count2<9) {
        computer();
    }

    console.log(count2);
    
}















// PLAY BUTTON
const page1 = document.getElementById('page1');
function play() {
    reset();
    page1.style.top = '-100%';
}
// RESET
function reset() {
    turnX = true;
    turn[0].style.display = 'block'
    turn[1].style.display = 'none'
    boxes.forEach((box) => {
        box.disabled = false;
        box.value = "";
        page3.style.top = '-100%';

    })
}
// HOME
function home() {
    turnX = true;
    turn[0].style.display = 'block'
    turn[1].style.display = 'none'
    page1.style.top = 0;
    page3.style.top = '-100%';
}