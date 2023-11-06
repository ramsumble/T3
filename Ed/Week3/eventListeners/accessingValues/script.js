function challengeOne() {

    const myForm = document.querySelector("form");

    myForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nameValue = myForm.querySelector('#name').value;
        const languageValue = myForm.querySelector('#language').value;
        const cohortValue = myForm.querySelector('#cohort').value;

        let newOutput = document.getElementById("output");
        newOutput.innerText = `Hello ${nameValue}, hope you are enjoying learning about ${languageValue} in ${cohortValue}`
    });
}

function challengeTwo() {

}

function challengeThree() {

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
