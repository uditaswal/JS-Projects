
const Length = document.getElementById("Length");
const includeLowerCase = document.getElementById("includeLowerCase");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeSymbols = document.getElementById("includeSymbols");
const includeNumbers = document.getElementById("includeNumbers");
const passwordbox = document.getElementById("passwordbox");

function generatePassword() {
let pass = "";
    const numbers = includeNumbers.checked ? "1234567890" : "";
    const uppercase = includeUpperCase.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const symbol = includeSymbols.checked ? "~!@#$%^&*()-_+={}[]|\:;'<>,./" : "";
    const lowercase = includeLowerCase.checked ? "abcdefghijklmnopqrstuvwxyz" : "";
    const allCharacters = lowercase + uppercase + numbers + symbol;

    let inputValue = Length.value;
    for (let i = 0; i < inputValue; i++) {
        pass += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
     passwordbox.textContent = pass;



}


function validateForm() {
    // Select all checkboxes in the form
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Convert the NodeList to an array and check if at least one checkbox is checked
    var checked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    // If none of the checkboxes are checked
    if (!checked) {
        alert("Please check at least one checkbox.");
        return false; // Prevent form submission
    }

    // If at least one checkbox is checked, allow form submission
    return true;
}


