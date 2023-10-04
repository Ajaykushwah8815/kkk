let gameBoard = document.querySelector(".board");
let gameState = document.querySelector(".gameStatement");
let button = document.querySelector(".button");

let flag = false;
let turn = "x";

button.addEventListener("click", function() {
    if (flag == false) {
        gameState.innerHTML = "x's turn";
        button.innerHTML = "Press to reset";

    } else {
        gameState.innerHTML = "";
        button.innerHTML = "start";
        count = 1;
        turn = "x";


    }
    flag = !flag;
})


gameBoard.addEventListener("click", function(event) {
    let block = event.target
    if (flag == true && block.innerHTML == "") {
        block.innerHTML = turn
        if (turn == "x") {
            turn = "0";
        } else {
            turn = "x";
        }

        gameState.innerHTML = turn + "'s turn";

        if (winnerChecker() == 'X') {
            gameState.innerHTML = "X Wins the game "
                // gamePlay = false;
            button.click();

        } else if (winnerChecker() == '0') {
            gameState.innerHTML = "0 wins the game "
                // gamePlay = false;
            button.click();


        } else if (count == 10) {
            gameState.innerHTML = "TIE"
                // gamePlay = false;
            button.click();
        }

    }
})

function winnerChecker() {
    let blockArray = document.querySelectorAll('.cell');

    if ((blockArray[0].innerHTML == "X" && blockArray[1].innerHTML == "X" && blockArray[2].innerHTML == "X") ||
        (blockArray[3].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[5].innerHTML == "X") ||
        (blockArray[6].innerHTML == "X" && blockArray[7].innerHTML == "X" && blockArray[8].innerHTML == "X") ||
        (blockArray[0].innerHTML == "X" && blockArray[3].innerHTML == "X" && blockArray[6].innerHTML == "X") ||
        (blockArray[1].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[7].innerHTML == "X") ||
        (blockArray[2].innerHTML == "X" && blockArray[5].innerHTML == "X" && blockArray[8].innerHTML == "X") ||
        (blockArray[0].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[8].innerHTML == "X") ||
        (blockArray[2].innerHTML == "X" && blockArray[4].innerHTML == "X" && blockArray[6].innerHTML == "X")) {
        return "X";
    } else if ((blockArray[0].innerHTML == "0" && blockArray[1].innerHTML == "0" && blockArray[2].innerHTML == "0") ||
        (blockArray[3].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[5].innerHTML == "0") ||
        (blockArray[6].innerHTML == "0" && blockArray[7].innerHTML == "0" && blockArray[8].innerHTML == "0") ||
        (blockArray[0].innerHTML == "0" && blockArray[3].innerHTML == "0" && blockArray[6].innerHTML == "0") ||
        (blockArray[1].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[7].innerHTML == "0") ||
        (blockArray[2].innerHTML == "0" && blockArray[5].innerHTML == "0" && blockArray[8].innerHTML == "0") ||
        (blockArray[0].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[8].innerHTML == "0") ||
        (blockArray[2].innerHTML == "0" && blockArray[4].innerHTML == "0" && blockArray[6].innerHTML == "0")) {
        return "0";
    } else {
        return 1;
    }
}