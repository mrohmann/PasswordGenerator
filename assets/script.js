// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLttr = "abcdefghijklmnopqrstuvqxyz"
var uppercaseLttr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num09 = "0123456789"
var specialCharLttr = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var possPassChar = [];
var numCharacters= 0;

// resets the user inputted values to zero
function reset()
  {
    var passwordText = document.querySelector("#password");
    passwordText.textContent = "Your Secure Password"
    possPassChar =[];
    numCharacters = 0;

  }
//Generates the Possible password characters and length based on the users inputs
function passwordprompts()
  {
    //checks to see how long the user wants the generated password to be
    numCharacters= Number(window.prompt('How long should your password be from 8 to 128 characters?', 'Enter a number between 8 and 128'));
    console.log("Number of characters selected: " + numCharacters);
  
    if(!numCharacters)
    {
      window.alert("Thanks for trying the Password Generator.")
      return
    }
    else if(numCharacters >= 8 && numCharacters <= 128) //confirms the number entered is between 8 and 128
    {
      //checks to see if the user wants to include lowercase letters.
      if( lowercase = window.confirm('Would you like to include lowercase letters?'))
      {
        console.log("lowercase: " + lowercase);
        possPassChar = possPassChar + lowercaseLttr;
      }

      //checks to see if the user wants to include uppercase letters.
      if ( uppercase = window.confirm('Would you like to includde Uppercase Letters?'))
      {
        console.log("Uppercase: " + uppercase);
        possPassChar = possPassChar + uppercaseLttr;
      }
       
      //checks to see if the user wants to include numerical colors.
      if( numbers = window.confirm('Would you like to include numbers?'))
      { 
        console.log("Numbers: " + uppercase)
        possPassChar = possPassChar + num09;
      }
      
      //Checks to see if the user wants special characters included.
      if( specialChar = window.confirm('Would you like to include Special Characters?'))
      {
        console.log("Special Characters: "+ specialChar);
        possPassChar = possPassChar + specialCharLttr;
      }

      console.log(possPassChar);
      console.log(possPassChar.length);
    }
    //Prompts the user to try again using a valid possible password length
    else
    {
      window.alert("Please try again using a number bewtween 8 and 128")
    }
  }


//Generates the password based on the answers of the user
function generatePassword()
{
  var newPass = [];
  for(let i=0; i<numCharacters; i++)
    {
      var index = Math.floor(Math.random() * possPassChar.length);
      newPass[i] = possPassChar[index];
      console.log(newPass);
    }
  return newPass;
};


// Write password to the #password input
function writePassword() 
{
  reset();
  passwordprompts();
  var password = generatePassword();
  console.log("generated password: " + password.join(""))
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password.join("");
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


