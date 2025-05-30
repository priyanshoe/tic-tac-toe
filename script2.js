const boxes = document.querySelectorAll('#box');
const turn = document.querySelectorAll('#turnx, #turno')
const page3 = document.querySelector('#page3')
const page1 = document.querySelector('#page1')
const msgBox = document.querySelector('#msgBox')
let xTurn = true;
let matchTie = true;
let count = 0;


// MAIN
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        count++;
    changeTurn(box);
        checkWin();
    })
})


// CHANGE TURN
function changeTurn(box) {
    box.disabled = true;
    
    if (xTurn) {
        xTurn = false;
        box.value = 'X';
        box.style.webkitTextStrokeColor = '#F2135A';
        turn[1].style.display = 'block'
        turn[0].style.display = 'none'
        
    }
    else {
        xTurn = true;
        box.value = 'O';
        box.style.webkitTextStrokeColor = '#F8CE35';
        turn[1].style.display = 'none'
        turn[0].style.display = 'block'
    }
}


//  CHECK WINNING
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWin() {

    for (let pattern of winPattern) {
        const val1 = boxes[pattern[0]].value;
        const val2 = boxes[pattern[1]].value;
        const val3 = boxes[pattern[2]].value;

        if (val1 != "" && val1 == val2 && val2 == val3) {
            for (box of boxes) {
                box.disabled = true;
            }
            for (let index of pattern) {
                boxes[index].style.webkitTextStrokeColor = "lightgreen";
            }
            matchTie = false;
            page3.style.top = 0;
            msgBox.innerHTML = val1+" Wins";
        }
    }
    // HANDLE TIE
    if(count>=9 && matchTie){
        page3.style.top = 0;
        msgBox.innerHTML = "Match Tie";   
    }
}



//PLAY
function play(){
    reset();
    page1.style.top = '-100%';
}

// RESET GAME
function reset(){
    for(box of boxes){
        box.disabled = false;
        box.value = '';
    };   
    page3.style.top = '-100%';
    count = 0;
    matchTie = true;
    xTurn = true;
    turn[1].style.display = 'none'
    turn[0].style.display = 'block'
}

//HOME
function home(){
    page3.style.top = "-100%";
    page1.style.top = 0;
}

