// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  if (){
    ;
  }
}

// Function for random generator
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26)+97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26)+65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10)+48);
}

function getRandomCharacter(){
  return String.fromCharCode(Math.floor(Math.random()*15 )+33);
}

console.log(Math.floor(Math.random()))