import { characters, percents, passwordLength } from "./config.js";

function validatePercents(percents) {
  const total = Object.values(percents).reduce((sum, val) => sum + val, 0);
  if (Math.abs(total - 1) > 0.001) {
    throw new Error("The sum of percentages in 'percents' must equal 1.");
  }
}

validatePercents(percents);

function calculateCategorySizes(length, percents) {
  const sizes = {};
  Object.keys(percents).forEach((element) => {
    sizes[element] = Math.floor(length * percents[element]);
  });
  return sizes;
}

function getRandomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

function randomArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function getPassword() {
  const categorySizes = calculateCategorySizes(passwordLength, percents);

  // const categories = [
  //   { chars: characters.upperCase, size: categorySizes.upperCasePercent },
  //   { chars: characters.lowerCase, size: categorySizes.lowerCasePercent },
  //   { chars: characters.numbers, size: categorySizes.numberPercent },
  //   { chars: characters.specialCharacters, size: categorySizes.specialPercent },
  // ];
  // ==============================================================
  const categories = Object.entries(characters).map(([key, chars]) => ({
    chars,
    size: percents[key + "Percent"],
  }));

  let password = categories.flatMap((category) =>
    Array.from({ length: category.size }, () => getRandomChar(category.chars))
  );

  while (password.length < passwordLength) {
    password.push(
      getRandomChar([
        ...characters.upperCase,
        ...characters.lowerCase,
        ...characters.numbers,
        ...characters.special,
      ])
    );
  }

  return randomArray(password).join("");
}

function generatePassword(elements) {
  const newPasswords = [getPassword(), getPassword()];
  elements.passwordFields.forEach(
    (field, index) => (field.textContent = newPasswords[index])
  );
}

function initialize() {
  const elements = {
    button: document.getElementById("button"),
    passwordFields: [
      document.getElementById("password-one"),
      document.getElementById("password-two"),
    ],
  };

  if (!elements.button || elements.passwordFields.some((field) => !field)) {
    throw new Error("Some elements are missing in the DOM.");
  }

  elements.button.addEventListener("click", () => generatePassword(elements));
}

initialize();
