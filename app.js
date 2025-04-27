let boxes = document.querySelectorAll('.box');
console.log(boxes); // Check if boxes are being selected

let resetButton = document.querySelector('#reset');
let newbtn= document.querySelector('#new-btn');
let msgcontainer =document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turn = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.style.pointerEvents = "none"; // Prevent further clicks
        checkWinner();
    });
});

const disable =() =>{
    boxes.forEach((box) => {
        box.disabled = true; // Disable the button
    });
}

const enable =() =>{
    boxes.forEach((box) => {
        box.disabled = false;         // <-- Add this line!
        box.style.pointerEvents = "auto";
        box.innerText = "";
    });
}


const showWinner= (winner) => {
    msg.innerText=`Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
}

function checkWinner() {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner");
                showWinner(val1);
            }
        }

    }
}
const resetGame= () =>{
    turn=true;
    enable();
    msgcontainer.classList.add("hide");

}

newbtn.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);


