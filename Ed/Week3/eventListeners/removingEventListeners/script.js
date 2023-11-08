function challengeOne() {
    function changeValue(value) {
        // this function is for the counter, 
        // if +5 button is clicked - counter increases by 5
        
        let buttonCounter = document.getElementById("counter-one");
        let currentValue = parseInt(buttonCounter.innerText);

        currentValue += value;
        buttonCounter.innerText = currentValue;
        
    }
    let five = document.getElementById("five");
    let ten = document.getElementById("ten");
    let fifteen = document.getElementById("fifteen");

    five.addEventListener("click", () => changeValue(5))
    ten.addEventListener("click", () => changeValue(10))
    fifteen.addEventListener("click", () => changeValue(15))

}

function challengeTwo() {
    function changeValue(event) {
        // This is the callback function for the event handler
        // It should either increment the value, decrement the value,
        // or stop changing the value in the <p> based on the button that is clicked

    }
    // Challenge 2: Use the event target to determine the value on the button
    // that triggered the click event. Add that value to the current value
    // in the paragraph and update what is shown on the page.
    // When the Stop button is clicked, the event handlers should all be removed.
}


function activity() {
    challengeOne()
    challengeTwo()
}

try {
    module.exports = {
        challengeOne,
        challengeTwo
    }
} catch {
}
