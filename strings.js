//these are my variables
var reverseButton = document.getElementById("reverse");
var assembleButton = document.getElementById("assemble");
var palindromeButton = document.getElementById("palindrome");


var testString = "";

// alphabet.addEventListener("keyUp", event);


reverseButton.addEventListener("click", reversal);

function reversal() {

    var alphabet = document.getElementById("textInput").value;
    newString = alphabet.split("").reverse().join("");
    // console.log("newString", newString);
    textField.innerHTML +=
        `<p>Your text reversed is <strong>${newString}</strong></p>`
    return newString;
};


///
assembleButton.addEventListener("click", alphabits);

function alphabits() {

    var alphabet = document.getElementById("textInput").value;
    alphebatizedString = alphabet.split("").sort().join("");
    textField.innerHTML +=
        `<p>Your text alphabetized is <strong>${alphebatizedString}</strong></p>`
    return alphebatizedString;
};



palindromeButton.addEventListener("click", palindrome)

function palindrome() {

    var alphabet = document.getElementById("textInput").value;
    var palString = document.getElementById("textInput").value;
    newString = alphabet.split("").reverse().join("");
    if (palString === newString) {
        textField.innerHTML +=
            `<h1>It's a Palindrome!</h1>`
    } else {
        textField.innerHTML +=
            `<h1>Look elsewhere for your palindromes!!!!</h1>`
    }
};




var textInput = document.getElementById("textInput");
textInput.addEventListener("keyup", enterListener);

function enterListener() {

    if (event.keyCode === 13) {
        console.log("hello");
        validateFields();
    }
}

function validateFields() {
    textField.innerHTML = '';

    if (isNaN(textInput.value)) {
        testString = textInput.value;
        // textInput.value;
        reversal(testString);
        alphabits(testString);
        palindrome(testString);
    } else {
        textInput.value = '';
        alert('please enter letters only into the input box');
    }

}