var storePressedButtons = new Array();
var randomColor = new Array();
addRandomColor();


const greenBtn = document.getElementById("greenBtn");
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const yellowBtn = document.getElementById("yellowBtn");

var debugText = document.getElementById("debugText");
var playerText = document.getElementById("playerText");



const tabBtn = [greenBtn, redBtn, blueBtn, yellowBtn];

showSequence();

tabBtn.forEach(btn =>
    btn.addEventListener("click", async () => {
        btn.classList.remove("isOff");
        await delay(100);
        btn.classList.add("isOff");
        storePressedButtons.push(btn.name);
        isCorrect(storePressedButtons.length - 1);
    })
);

function addRandomColor() {
    let color = ["green", "red", "blue", "yellow"];
    let number = Math.floor(Math.random() * 4);
    randomColor.push(color[number]);
}

// //Debug fonction
// function displayRandomColor() {
//     let textRandomColor = "";
//     randomColor.forEach((color) => {
//         textRandomColor = textRandomColor + color + " ";
//     });
//     return textRandomColor;
// }

// //Debug fonction
// function displayPlayerColor() {
//     let textPlayerColor = "";
//     storePressedButtons.forEach((color) => {
//         textPlayerColor = textPlayerColor + color + " ";
//     });
//     return textPlayerColor;
// }


async function isCorrect(i) {
    if (storePressedButtons[i] != randomColor[i]) {
        storePressedButtons.splice(0, storePressedButtons.length);
        randomColor.splice(1, randomColor.length);
    }
    if (i == randomColor.length - 1) {
        storePressedButtons.splice(0, storePressedButtons.length);
        addRandomColor();
        await delay(500);
        showSequence();

    }
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showSequence() {
    tabBtn.forEach(btn => btn.disabled = true);

    for (let color of randomColor) {
        tabBtn.forEach(btn => btn.classList.add("isOff"));
        await delay(200);

        switch (color) {
            case 'green':
                greenBtn.classList.remove("isOff");
                break;
            case 'red':
                redBtn.classList.remove("isOff");
                break;
            case 'blue':
                blueBtn.classList.remove("isOff");
                break;
            case 'yellow':
                yellowBtn.classList.remove("isOff");
                break;
            default:
                console.error("Erreur");
                break;
        }
        await delay(1000);
    }
    tabBtn.forEach(btn => btn.classList.add("isOff"));
    tabBtn.forEach(btn => btn.disabled = false);
}