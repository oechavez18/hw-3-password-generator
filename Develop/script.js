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
  const lowerArray=[];
  const upperArray=[];
  const numberArray=[]
  const characterArray=[];

  //create lower alphabet rray
  for( let i=97; i<123; i++){
    const holder = String.fromCharCode(i);
  lowerArray.push(holder);
  }

  //getRadomUpper Array
  for( let i=0; i<lowerArray.length; i++)
  {
    const holder = lowerArray[i].toUpperCase();
    upperArray.push(holder);
  }

  //getRadnomNumber Array
  for( let i=48; i<58; i++){
    const holder = String.fromCharCode(i);
  numberArray.push(holder);
  }


  //getRAndomCharacter Array
  for( let i=33; i<48; i++){
    const holder = String.fromCharCode(i);
  characterArray.push(holder);
  }

  //prompt screen variables
  let passwordLength; 
  let confirmLower;
  let confirmUpper;
  let confirmNumber;
  let confirmCharacter;
  let selectedCriteria=[];

  //generate password prompt screen
  function generatePassword(){
    passwordLength= prompt("Please choose the length of your password, between 8-128 characters long.");
  //if user does not input a vlaule
    if (!passwordLength)
    {
      alert("Invalid! Need to insert a number between 8-128.");
      return;
    }
    //if user's value does not meet the range
    else if (passwordLength<8 || passwordLength>128)
    {
      passwordLength= alert("Password needs to be between 8-128 characters");
      return;
    }
  //prompt screen criteria 
    else{
      confirmLower= confirm("Will your password take lower-case letters?");
      
      confirmUpper= confirm("Will your password take upper-case letters?");
      
      confirmNumber= confirm("Will your password take numbers?");
    
      confirmCharacter= confirm("Will your password take special characters?");
    }
  // NO Criteria Selected
    if(!confirmLower && !confirmUpper && !confirmNumber && !confirmCharacter)
    { alert("A criteria needs to be picked!  Please pick a criteria." );}
  //All criteria Selected
    else if (confirmLower && confirmUpper && confirmNumber && confirmCharacter){
      selectedCriteria= lowerArray.concat(upperArray, numberArray, characterArray);
  }
  //Character not selected
    else if(confirmLower && confirmUpper && confirmNumber && !confirmCharacter){
      selectedCriteria= lowerArray.concat(upperArray, numberArray);
    }
    //number and character not selected
    else if(confirmLower && confirmUpper && !confirmNumber && !confirmCharacter){
      selectedCriteria= lowerArray.concat(upperArray);
    }
    //Lower is only criteria slected
    else if(confirmLower && !confirmUpper && !confirmNumber && !confirmCharacter){
      selectedCriteria= lowerArray;
    }
    // upper and character not selected
    else if(confirmLower && !confirmUpper && confirmNumber && !confirmCharacter){
      selectedCriteria= lowerArray.concat(numberArray);
    }
  //Number not selected
    else if(confirmLower && confirmUpper && !confirmNumber && confirmCharacter){
      selectedCriteria= lowerArray.concat(upperArray,characterArray);
    }
    //Number and upper not selected
    else if(confirmLower && !confirmUpper && !confirmNumber && confirmCharacter){
      selectedCriteria= lowerArray.concat(characterArray);
    }
    //Upper not selected
    else if(confirmLower && !confirmUpper && confirmNumber && confirmCharacter){
      selectedCriteria= lowerArray.concat(numberArray,characterArray);
    }
    //Upper and number not selected
    else if(confirmLower && !confirmUpper && !confirmNumber && confirmCharacter){
      selectedCriteria= lowerArray.concat(characterArray);
    }
    //Upper only criteria selected
    else if(!confirmLower && confirmUpper && !confirmNumber && !confirmCharacter){
      selectedCriteria= upperArray;
    }
    //Number only criteria selected
    else if(!confirmLower && !confirmUpper && confirmNumber && !confirmCharacter){
      selectedCriteria= numberArray;
    }
    //Character only criteria selected
    else if(!confirmLower && !confirmUpper && !confirmNumber && confirmCharacter){
      selectedCriteria= characterArray;
    }
    //lower and character not selected
    else if(!confirmLower && confirmUpper && confirmNumber && !confirmCharacter){
      selectedCriteria= upperArray.concat(numberArray);
    }
  //lower and number not selected
    else if(!confirmLower && confirmUpper && !confirmNumber && confirmCharacter){
      selectedCriteria= upperArray.concat(characterArray);
    }
  //lower and upper not selected
    else if(!confirmLower && !confirmUpper && confirmNumber && confirmCharacter){
      selectedCriteria= numberArray.concat(characterArray);
    }
    //lower not selected
    else if(!confirmLower && confirmUpper && confirmNumber && confirmCharacter){
      selectedCriteria= upperArray.concat(numberArray, characterArray);
    }

    let generatedPassword=[];

  //For loop to generate random password
  for( let i=0; i<passwordLength; i++)
  {
    const holder = selectedCriteria[Math.floor(Math.random()*selectedCriteria.length)];
    generatedPassword.push(holder);
  }

  password= generatedPassword.join('');
  return password;
  }


