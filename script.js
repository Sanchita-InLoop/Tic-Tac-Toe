let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let winnerMsg = document.querySelector("#winner");
let msgContainner = document.querySelector(".msg");
let turnO = true;

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}

const reset = () =>{
    for(let box of boxes){
        enableBoxes();
        box.innerText = "";
    }
    msgContainner.classList.add("hide");
}

const newGame = () =>{
    for(let box of boxes){
        enableBoxes();
        box.innerText = "";
    }
    msgContainner.classList.add("hide");
    turnO = false;
}

boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const announceWinner = (Winner) => {
    msgContainner.classList.remove("hide");
    disableBoxes();
    winnerMsg.innerText = (`Congratulations, Winner is ${Winner}`);
}

const checkWinner = () => {
    for(let pattern of winningPattern){
        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText; 
        
        if((pos1 != "") && (pos2 != "") && (pos3 != "")){
            if((pos1 === pos2) && (pos1 === pos3)){
            announceWinner(pos1);
            }
        }
    }
};

resetBtn.addEventListener("click", reset);
newBtn.addEventListener("click", newGame);