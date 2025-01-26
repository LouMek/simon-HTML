var storePressedButtons = new Array();
var randomColour = new Array();
randomColour.push(redBtn.name);

const greenBtn = document.getElementById("greenBtn");
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const yellowBtn = document.getElementById("yellowBtn")


const tabBtn = [greenBtn, redBtn, blueBtn, yellowBtn];

for (let btn of tabBtn) {
    btn.addEventListener("click", () => {
        storePressedButtons.push(btn.name);
        console.table(randomColour);
        console.table(storePressedButtons);

        addRandomColour()
        console.table(randomColour);

    });
}


function addRandomColour() {
    let colour = ["green", "red", "blue", "yellow"];
    let number = Math.floor(Math.random() * 4);
    randomColour.push(colour[number]);

}


