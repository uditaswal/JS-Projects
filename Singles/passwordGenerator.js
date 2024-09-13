function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers) {

    const lowercase = includeLowerCase ? "abcdefghijklmnopqrstuvwxyz" : "";
    const uppercase = includeUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const numbers = includeNumbers ? "1234567890" : "";
    const symbol = includeSymbols ? "~!@#$%^&*()-_+={}[]|\:;'<>,./" : "";
    const allCharacters = lowercase + uppercase + numbers + symbol;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
     return password;
}


let passwordLength = 0;
let includeLowerCase = true;
let includeUpperCase = true;
let includeSymbols = true;
let includeNumbers = true;

console.log(generatePassword(10, true, true, true, true));