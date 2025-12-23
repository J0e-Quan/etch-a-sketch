//LIST OF FUNCTIONS
function createDivs(canvasSize) {
        for (let i = 0; i < canvasSize; i++) {
        let verticalDiv = document.createElement("div");
        verticalDiv.classList.add("verticalDiv", "box")
        let divSize = (720/canvasSize)
        verticalDiv.style.width = canvasSize*(divSize) + "px";
        verticalDiv.style.height = divSize + "px";
        container.appendChild(verticalDiv);
        for (let j = 0; j < canvasSize; j++) {
            let horizontalDiv = document.createElement("div");
            horizontalDiv.classList.add("horizontalDiv", "box")
            horizontalDiv.style.width = divSize + "px";
            horizontalDiv.style.height = divSize + "px";
            verticalDiv.appendChild(horizontalDiv);
        };
    };
};

function getRandomColour() {
    let randomR = Math.floor(Math.random()*255)+1
    let randomG = Math.floor(Math.random()*255)+1
    let randomB = Math.floor(Math.random()*255)+1
    return "rgb(" + randomR + ", " + randomG + ", " + randomB + ")"
}





let canvasSize = 16; //Sets initial value of canvas size
let container = document.querySelector(".container");
createDivs(canvasSize)

//Painter
let boxes = document.querySelectorAll(".horizontalDiv")
boxes.forEach((box) => {
    let targetBox = box
    console.log(targetBox)
    targetBox.addEventListener('mouseenter', () => {
        let randomColour = getRandomColour()
        targetBox.style.backgroundColor = randomColour;
    });
});

//Canvas resizing
let btn = document.querySelector("button")
btn.addEventListener('click', () => {
    canvasSize = prompt("Change the size of your canvas! (Pick number between 1 to 100", 16);
    if (canvasSize <= 100) {
        let allBoxes = document.querySelectorAll(".box");
        allBoxes.forEach((box) => box.remove());
        createDivs(canvasSize);
        boxes = document.querySelectorAll(".horizontalDiv")
        boxes.forEach((box) => {
            let targetBox = box
            console.log(targetBox)
            targetBox.addEventListener('mouseenter', () => {
                let randomColour = getRandomColour()
                targetBox.style.backgroundColor = randomColour;
            });
        });
    } else {
    }
});