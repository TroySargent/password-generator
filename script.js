//characters available to build password
const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "123456789";
const specialChar = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

//Initialize global variables to access in other functions
var arrayOfCharacters;
var passwordLength;
var i;

//when generate button is clicked get user's password specifications and call writePassword()
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  //clear array of characters in memory
  arrayOfCharacters = []

  passwordLength = prompt("How many characters long do you want your password to be? (8-128)");

  //stops function if user selects cancel on prompt
  if (passwordLength === null) {
    alert("You did not supply a length. Please try again.");
    return;
  }

  //restrict password length to min and max
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("You did not supply a length of at least 8 and no more than 128. Please try again.");
    return;
  }

  //confirm which characters sets user wants
  var useLowerAlpha = confirm("Do you want to use lowercase letters?");
  var useUpperAlpha = confirm("Do you want to use uppercase letters?");
  var useNumbers = confirm("Do you want to use numbers?");
  var useSpecialCharacters = confirm("Do you want to use special characters?");

  //conditionally add string of characters to array if user confirmed (True)
  useLowerAlpha === true ? arrayOfCharacters.push(lowerAlphabet) : console.log("no lowercase");
  useUpperAlpha === true ? arrayOfCharacters.push(upperAlphabet) : console.log("no uppercase");
  useNumbers === true ? arrayOfCharacters.push(numbers) : console.log("no numbers");
  useSpecialCharacters === true ? arrayOfCharacters.push(specialChar) : console.log("no special characters");

  //error handle in the event user does not select any characters (All False)
  if (arrayOfCharacters.length === 0) {
    alert("You did not supply any characters. Please try again.");
    return;
  };

  //call callback function to generate and then show password
  generatePassword(writePassword);

});

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

/* loop that randomly selects string and a random 
character of that string in order to build the password */

function generatePassword(callback) {
  i = 0;
  var password = "";

  while (i < passwordLength) {
    var randomString = Math.floor(Math.random() * arrayOfCharacters.length);
    var randomIndex = Math.floor(Math.random() * arrayOfCharacters[randomString].length);

    password += arrayOfCharacters[randomString][randomIndex];

    i++
  };
  callback(password);
};