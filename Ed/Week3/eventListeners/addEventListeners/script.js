function challengeOne() {
    let onClick = document.getElementById("challenge-one");

    onClick.addEventListener("click", function(event) {
        console.log("Hello World");
    });

}

function challengeTwo() {
    let button = document.getElementById("challenge-two")

    button.addEventListener("click", function(event) {
        let ul = document.querySelector(".column ul");

        let newLi = document.createElement("li");
        newLi.textContent = "New List Item";

        ul.appendChild(newLi);
    });
}


function challengeThree() {
    const colours = ['rgb(238, 130, 238)', 'rgb(75, 0, 130)', 'rgb(0, 0, 255)', 'rgb(0, 128, 0)', 'rgb(255, 255, 0)', 'rgb(255, 165, 0)', 'rgb(255, 0, 0)']
    // had to start counter at +1 to get around the initial double click of the button???
    let colourIndex = +1;

    let cycleColour = document.getElementById("challenge-three");

    cycleColour.addEventListener("click", function(event) {
        let elementToChange = document.getElementById("rainbow");

        elementToChange.style.backgroundColor = colours[colourIndex];
        // console.log(elementToChange)
        colourIndex++

        // loop back to the begining
        if (colourIndex >= colours.length) {
            colourIndex = 0;
        }

    });

}

function activity() {
    challengeOne()
    challengeTwo()
    challengeThree()
}

try {
    module.exports = {
        challengeOne,
        challengeTwo,
        challengeThree
    } 
} catch {
}
