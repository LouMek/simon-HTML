var storePressedButtons = new Array();
var randomColour = new Array();


const greenBtn = document.getElementById("greenBtn");
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const yellowBtn = document.getElementById("yellowBtn");

var debugText = document.getElementById("debugText");
var playerText = document.getElementById("playerText");

randomColour.push(redBtn.name);

const tabBtn = [greenBtn, redBtn, blueBtn, yellowBtn];

for (let btn of tabBtn) {
    btn.addEventListener("click", () => {
        storePressedButtons.push(btn.name);
        console.table(randomColour);
        console.table(storePressedButtons);

        isCorrect()
        addRandomColour()
        console.table(randomColour);



        debugText.innerHTML = displayRandomColour();

        playerText.innerHTML = displayPlayerColour();

    });
}


function addRandomColour() {
    let colour = ["green", "red", "blue", "yellow"];
    let number = Math.floor(Math.random() * 4);
    randomColour.push(colour[number]);
}

//Debug fonction
function displayRandomColour() {
    let textRandomColour = "";
    randomColour.forEach((colour) => {
        textRandomColour = textRandomColour + colour + " ";
    });
    return textRandomColour;
}

//Debug fonction
function displayPlayerColour() {
    let textPlayerColour = "";
    storePressedButtons.forEach((colour) => {
        textPlayerColour = textPlayerColour + colour + " ";
    });
    return textPlayerColour;
}

function isCorrect() {

    if (storePressedButtons[storePressedButtons.length - 1] != randomColour[randomColour.length - 1]) {
        storePressedButtons.splice(0, storePressedButtons.length);
        randomColour = ["red"];
    }

}
