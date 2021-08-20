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

//console.log(getRandomLower);

//getRadomUpper Array
for( var i=0; i<getRandomLower.length; i++)
{
  var holder = getRandomLower[i].toUpperCase();
  getRandomUpper.push(holder);
}
//console.log(getRandomUpper);

//getRadnomNumber Array
for( var i=48; i<58; i++){
  var holder = String.fromCharCode(i);
getRandomNumber.push(holder);
}

//console.log(getRandomNumber);

//getRAndomCharacter Array
for( var i=33; i<48; i++){
  var holder = String.fromCharCode(i);
getRandomCharacter.push(holder);
}

//console.log(getRandomCharacter);

//prompt screen variables
var passwordLength; 
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmCharacter;
var selectedCriteria=[];

//generate password prompt screen
function generatePassword(){
   passwordLength= prompt("Please choose the length of your password, between 8-128 characters long.");
   console.log("password length " + passwordLength);

  if (!passwordLength)
  {
    alert("Invalid! Need to insert a number between 8-128.");
  }
  // else if( typeof(passwordLength)!=Number)
  // {
  //   alert("Numbers only!");
  //   console.log("inncorrect input for password length " + passwordLength);
    
  // }
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
// NO Criteria Selected
   if(!confirmLower && !confirmUpper && !confirmNumber && !confirmCharacter)
   { alert("A criteria needs to be picked!  Please pick a criteria." );}
   //All criteria Selected
   else if (confirmLower && confirmUpper && confirmNumber && confirmCharacter){
     selectedCriteria= getRandomLower.concat(getRandomUpper, getRandomNumber, getRandomCharacter);
     console.log(selectedCriteria);
}
//Character not selected
  else if(confirmLower && confirmUpper && confirmNumber && !confirmCharacter){
    selectedCriteria= getRandomLower.concat(getRandomUpper, getRandomNumber);
     console.log(selectedCriteria);
  }
  //number and character not selected
  else if(confirmLower && confirmUpper && !confirmNumber && !confirmCharacter){
    selectedCriteria= getRandomLower.concat(getRandomUpper);
     console.log(selectedCriteria);
  }
  //Lower is only criteria slected
  else if(confirmLower && !confirmUpper && !confirmNumber && !confirmCharacter){
    selectedCriteria= getRandomLower;
     console.log(selectedCriteria);
  }
  // upper and character not selected
  else if(confirmLower && !confirmUpper && confirmNumber && !confirmCharacter){
    selectedCriteria= getRandomLower.concat(getRandomNumber);
     console.log(selectedCriteria);
  }
//Number not selected
  else if(confirmLower && confirmUpper && !confirmNumber && confirmCharacter){
    selectedCriteria= getRandomLower.concat(getRandomUpper,getRandomCharacter);
     console.log(selectedCriteria);
  }
  //Number and upper not selected
  else if(confirmLower && !confirmUpper && !confirmNumber && confirmCharacter){
    selectedCriteria= getRandomLower.concat(getRandomCharacter);
     console.log(selectedCriteria);
  }
  //Upper not selected
  else if(confirmLower && !confirmUpper && confirmNumber && confirmCharacter){
    selectedCriteria= getRandomLower.concat(getRandomNumber,getRandomCharacter);
     console.log(selectedCriteria);
  }
  //Upper and number not selected
  else if(confirmLower && !confirmUpper && !confirmNumber && confirmCharacter){
    selectedCriteria= getRandomLower.concat(getRandomCharacter);
     console.log(selectedCriteria);
     
  }
  //Upper only criteria selected
  else if(!confirmLower && confirmUpper && !confirmNumber && !confirmCharacter){
    selectedCriteria= getRandomUpper;
     console.log(selectedCriteria);
  }
  //Number only criteria selected
  else if(!confirmLower && !confirmUpper && confirmNumber && !confirmCharacter){
    selectedCriteria= getRandomNumber;
     console.log(selectedCriteria);
  }
  //Character only criteria selected
  else if(!confirmLower && !confirmUpper && !confirmNumber && confirmCharacter){
    selectedCriteria= getRandomCharacter;
     console.log(selectedCriteria);
  }
  //lower and character not selected
  else if(!confirmLower && confirmUpper && confirmNumber && !confirmCharacter){
    selectedCriteria= getRandomUpper.concat(getRandomNumber);
     console.log(selectedCriteria);
  }
//lower and number not selected
  else if(!confirmLower && confirmUpper && !confirmNumber && confirmCharacter){
    selectedCriteria= getRandomUpper.concat(getRandomCharacter);
     console.log(selectedCriteria);
  }
//lower and upper not selected
  else if(!confirmLower && !confirmUpper && confirmNumber && confirmCharacter){
    selectedCriteria= getRandomNumber.concat(getRandomCharacter);
     console.log(selectedCriteria);
  }
  //lower not selected
  else if(!confirmLower && confirmUpper && confirmNumber && confirmCharacter){
    selectedCriteria= getRandomUpper.concat(getRandomNumber, getRandomCharacter);
     console.log(selectedCriteria);
  }

  var generatedPassword=[];

//For loop to generate random password
for( var i=0; i<passwordLength; i++)
{
  var holder = selectedCriteria[Math.floor(Math.random()*selectedCriteria.length)];
  generatedPassword.push(holder);
}
console.log(generatedPassword);

password= generatedPassword.join('');
return password;
}


