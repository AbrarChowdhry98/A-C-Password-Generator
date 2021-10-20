// Assignment code here
function generatePassword() {
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharacters = ['@', '%', '+', '/', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var numericalCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var allCharacters = [];
  console.log('generate');

  // Calculation based on the user's choices 
  x = window.prompt("Please Choose a length for your password.");
  if (x < 8 || x > 100) {
    return "Try choosing a number between 8 and 100.";
  } else if (isNaN(x)) {
    x = window.alert("Enter a number, letter, or keyboard symbol please!");
    console.log(x);
  }
  else {
    window.alert("Password will be displayed  " + x + " characters in length.");
    console.log(x);
  }

  //Prompt the user to create a strong password
  window.confirm("A strong password contians uppercase, lowercase, numbers and special characters, Ok?");
  lowercase = confirm("Add Lowercase Characters?");
  if (lowercase) {
    var turnToLowercase = alert("Lowercase added.");
  }
  else {
    alert("Ok, no lowercase characters.");
  }

  uppercase = confirm("Add Uppercase?");
  if (uppercase) {
    alert("Uppercase added!");
  }
  else {
    alert("Ok, no uppercase characters!");
  }

  numbers = confirm("Add Numbers?");
  if (numbers) {
    alert("Numbers added!");
  }
  else {
    alert("Ok, no Numbers.");
  }

  specials = confirm("Add Special Characters?");
  if (specials) {
    alert("Special characters added!");
  }
  else {
    alert("Ok, no Special Characters.");
  }
 // Alert User the password was successfully generated 
  alert("Here is your Secured Password!");
  
  // False conditional statement
  if (uppercase === false && lowercase === false && numbers === false && specials === false) {
    return "Select any of the characters on your keybord including numbers and special characters  ";
  };

  //Range of characters to select from
  if (uppercase) {
    allCharacters = allCharacters.concat(uppercaseCharacters);
  }
  if (lowercase) {
    allCharacters = allCharacters.concat(lowercaseCharacters);
  }
  if (numbers) {
    allCharacters = allCharacters.concat(numericalCharacters);
  }
  if (specials) {
    allCharacters = allCharacters.concat(specialCharacters);
  }
  
//Calculate a random password from all characters
  let password = ""
  for (let i = 0; i < x; i++) {
    let rng =[Math.floor(Math.random() * allCharacters.length)];
    password = password + allCharacters[rng];
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log('inside');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log('hey this one worked outside');
