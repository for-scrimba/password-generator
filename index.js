const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 15;

let buttonEl = document.getElementById("button");
let passwordFirstEl = document.getElementById("password-one");
let passwordSecondEl = document.getElementById("password-two");

function getPassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i += 1) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

// console.log(getPassword());

buttonEl.addEventListener("click", function () {
  passwordFirstEl.textContent = getPassword();
  passwordSecondEl.textContent = getPassword();
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const characters = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "~",
//   "`",
//   "!",
//   "@",
//   "#",
//   "$",
//   "%",
//   "^",
//   "&",
//   "*",
//   "(",
//   ")",
//   "_",
//   "-",
//   "+",
//   "=",
//   "{",
//   "[",
//   "}",
//   "]",
//   ",",
//   "|",
//   ":",
//   ";",
//   "<",
//   ">",
//   ".",
//   "?",
//   "/",
// ];

// let passwordLength = 12;

// function getRandomCharacter() {
//   let randomChar = Math.floor(Math.random() * characters.length);
//   return characters[randomChar];
// }

// function generateRandomPassword() {
//   let randomPassword = "";
//   for (let i = 0; i < passwordLength; i++) {
//     randomPassword += getRandomCharacter();
//   }
//   return randomPassword;
// }

// const generatedPasswordOne = generateRandomPassword();

// console.log("Here is a random password: ", generatedPasswordOne);
