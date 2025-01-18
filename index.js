import { characters, percents, passwordDefaults } from "./config.js";

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
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return chars[array[0] % chars.length];
  } else {
    console.warn("Falling back to Math.random for character generation.");
    return chars[Math.floor(Math.random() * chars.length)];
  }
}

function randomArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function getPassword(config) {
  const length = config?.length || passwordDefaults.length;
  const categorySizes = calculateCategorySizes(length, percents);

  const categories = Object.entries(characters).map(([key, chars]) => ({
    chars,
    size: categorySizes[key + "Percent"],
  }));

  let password = categories.flatMap((category) =>
    Array.from({ length: category.size }, () => getRandomChar(category.chars))
  );

  while (password.length < length) {
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

function generatePassword(elements, config) {
  const newPasswords = [getPassword(config), getPassword(config)];
  elements.passwordFields.forEach(
    (field, index) => (field.textContent = newPasswords[index])
  );
}

function updateSliderValue(lengthInput, sliderValue) {
  sliderValue.textContent = lengthInput.value;
}

function handleSliderInput(lengthInput, sliderValue) {
  updateSliderValue(lengthInput, sliderValue);
}

function initialize() {
  const elements = {
    button: document.getElementById("button"),
    passwordFields: [
      document.getElementById("password-one"),
      document.getElementById("password-two"),
    ],
    lengthInput: document.getElementById("password-length"),
    sliderValue: document.getElementById("slider-value"),
  };

  if (
    !elements.button ||
    elements.passwordFields.some((field) => !field) ||
    !elements.lengthInput
  ) {
    throw new Error("Some elements are missing in the DOM.");
  }

  updateSliderValue(elements.lengthInput, elements.sliderValue);

  elements.lengthInput.addEventListener("input", () => {
    handleSliderInput(elements.lengthInput, elements.sliderValue);
  });

  elements.button.addEventListener("click", () => {
    const length =
      parseInt(elements.lengthInput.value, 10) || passwordDefaults.length;
    const config = { length };
    generatePassword(elements, config);
  });
}

initialize();
