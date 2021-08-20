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

var randomGenerator= function(){
   String.fromCharCode(Math.floor(Math.random() * 26)+97);
   String.fromCharCode(Math.floor(Math.random() * 26)+65);
   String.fromCharCode(Math.floor(Math.random() * 10)+48);
   String.fromCharCode(Math.floor(Math.random()*15 )+33);
};

var passwordLength; 
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmCharacter;
var selectedCriteria;


function generatePassword(){
   passwordLength= prompt("Please choose the length of your password, between 8-128 characters long.");
   console.log("password length " + passwordLength);

  if (!passwordLength)
  {
    alert("Invalid! Need to insert a number between 8-128.")
  }
  else if (passwordLength<8 || passwordLength>128)
   {
     passwordLength= alert("Password needs to be between 8-128 characters");
     console.log("passwrod length " + passwordLength);
   }

   else{
    confirmLower= confirm("Will your password take lower-case letters?");
    console.log("Lower "+ confirmLower);
    confirmUpper= confirm("Will your password take upper-case letters?");
    console.log("Upper "+ confirmUpper);
    confirmNumber= confirm("Will your password take numbers?");
    console.log("Number "+ confirmNumber);
    confirmCharacter= confirm("Will your password take special characters?");
    console.log("Character "+ confirmCharacter);
   }

   if(!confirmLower && !confirmUpper && !confirmNumber && !confirmCharacter)
   { alert("A criteria needs to be picked!  Please pick a criteria." );}
   else if (confirmLower && confirmUpper && confirmNumber && confirmCharacter)
{
  selectedCriteria= randomGenerator() ;
  
}
  }