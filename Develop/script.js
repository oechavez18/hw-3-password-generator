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

//Intial Arrays
var getRandomLower=[];
var getRandomUpper=[];
var getRandomNumber=[]
var getRandomCharacter=[];

//getRadomLower Array
for( var i=97; i<123; i++){
  var holder = String.fromCharCode(i);
getRandomLower.push(holder);
}

console.log(getRandomLower);

//getRadomUpper Array
for( var i=0; i<getRandomLower.length; i++)
{
  var holder = getRandomLower[i].toUpperCase();
  getRandomUpper.push(holder);
}
console.log(getRandomUpper);

//getRadnomNumber Array
for( var i=48; i<58; i++){
  var holder = String.fromCharCode(i);
getRandomNumber.push(holder);
}

console.log(getRandomNumber);

//getRAndomCharacter Array
for( var i=33; i<48; i++){
  var holder = String.fromCharCode(i);
getRandomCharacter.push(holder);
}

console.log(getRandomCharacter);

//prompt screen variables
var passwordLength; 
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmCharacter;
var selectedCriteria;

//generate password prompt screen
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
  console.log(selectedCriteria);
}
  }


  for(var i=0; i<selectedCriteria.passwordLength; i++)
  {;}