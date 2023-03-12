// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lowcaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upcaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChars = "0123456789";
  var specChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //this will prompt the user for acceptance criteria of their generated password
  var length = parseInt(prompt("How many characters should the password contain? (between 8 and 128)"));

  //this will require the user to input a password length of between 8 and 128, no exception
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be between 8 and 128");
    return "";
  }

  var lowCase = confirm("Should the password contain lowercase letters?");
  var upCase = confirm("Should the password contain uppercase letters?");
  var numeric = confirm("Should the password contain numbers?");
  var special = confirm("Should the password contain special characters?");

  //requires that the user uses at least 1 of the criteria in order to generate the password
  if (!lowCase && !upCase && !numeric && !special) {
    alert("At least one character type must be selected");
    return "";
  }

  //builds the password using the criteria that the user wants
  var charset = "";
  if (lowCase) {
    charset += lowcaseChars;
  }
  if (upCase) {
    charset += upcaseChars;
  }
  if (numeric) {
    charset += numChars;
  }
  if (special) {
    charset += specChars;
  }
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
