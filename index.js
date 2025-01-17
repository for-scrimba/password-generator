const characters = {
  upperCase: [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  lowerCase: [..."abcdefghijklmnopqrstuvwxyz"],
  numbers: [..."0123456789"],
  specialCharacters: [..."~`!@#$%^&*()_-+=[]{}|:;<>.?/"],
};

const percents = {
  upperCasePercent: 0.25,
  lowerCasePercent: 0.45,
  numberPercent: 0.15,
  specialPercent: 0.15,
};

const passwordLength = 15;

// const upperSize = Math.floor(passwordLength * percents.upperCasePercent);
// const lowerSize = Math.floor(passwordLength * percents.lowerCasePercent);
// const numberSize = Math.floor(passwordLength * percents.numberPercent);
// const specialSize = Math.floor(passwordLength * percents.specialPercent);

let buttonEl = document.getElementById("button");
let passwordFirstEl = document.getElementById("password-one");
let passwordSecondEl = document.getElementById("password-two");

function getRandomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

function getPassword() {
  let password = [
    ...Array(upperSize)
      .fill()
      .map(() => getRandomChar(characters.upperCase)),
    ...Array(lowerSize)
      .fill()
      .map(() => getRandomChar(characters.lowerCase)),
    ...Array(numberSize)
      .fill()
      .map(() => getRandomChar(characters.numbers)),
    ...Array(specialSize)
      .fill()
      .map(() => getRandomChar(characters.specialCharacters)),
  ];
  // let password = [];
  // for (let i = 0; i < upperSize; i += 1) {
  //   password.push(getRandomChar(characters.upperCase));
  // }
  // for (let i = 0; i < lowerSize; i += 1) {
  //   password.push(getRandomChar(characters.lowerCase));
  // }
  // for (let i = 0; i < numberSize; i += 1) {
  //   password.push(getRandomChar(characters.numbers));
  // }
  // for (let i = 0; i < specialSize; i += 1) {
  //   password.push(getRandomChar(characters.specialCharacters));
  // }

  while (password.length < passwordLength) {
    password.push(
      getRandomChar([
        ...characters.upperCase,
        ...characters.lowerCase,
        ...characters.numbers,
        ...characters.specialCharacters,
      ])
    );
  }

  function randomArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

  return (password = randomArray(password).join(""));
}

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

// let passwordLength = 15;

// let buttonEl = document.getElementById("button");
// let passwordFirstEl = document.getElementById("password-one");
// let passwordSecondEl = document.getElementById("password-two");

// function getPassword() {
//   let password = "";
//   for (let i = 0; i < passwordLength; i += 1) {
//     password += characters[Math.floor(Math.random() * characters.length)];
//   }
//   return password;
// }

// buttonEl.addEventListener("click", function () {
//   passwordFirstEl.textContent = getPassword();
//   passwordSecondEl.textContent = getPassword();
// });
