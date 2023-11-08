
function addEventListeners() {
    // Don't Change this function.
    let darkModeButton = document.getElementById("dark-mode")
    let lightModeButton = document.getElementById("light-mode")
    // When the buttons are clicked, they call the respective function
    darkModeButton.addEventListener('click', changeToDarkMode)
    lightModeButton.addEventListener('click', changeToLightMode)
}

function changeToDarkMode() {
    // Modify the body's class list to change the page to dark 
    document.body.classList.add("darkmode");
}

function changeToLightMode() {
    // Modify the body's class list to change the page to light mode
    document.body.classList.remove("darkmode");
}

function changeBulletsToSquares() {
    // change the bullet cirlces to squares
    let newBullets = document.querySelector("ul");

    newBullets.style.listStyleType = 'square';

}

function changeFontSizeAndColour() {
    // Change the body font styles
    let selectBody = document.querySelector("body");
    selectBody.style.fontSize = "28px";
    selectBody.style.fontFamily = "Arial";
}

// Do not change this function
function activity() {
    addEventListeners()
    changeBulletsToSquares()
    changeFontSizeAndColour()
}

module.exports = {
    changeToDarkMode,
    changeToLightMode,
    changeBulletsToSquares,
    changeFontSizeAndColour
}

