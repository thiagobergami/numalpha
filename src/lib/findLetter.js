const Characters = require("./characters");

/**
 * Finds the letter corresponding to a given number in the English alphabet.
 * 
 * @param {number} number - The number whose corresponding letter is to be found.
 * @returns {string} - The letter corresponding to the number.
 */
const findLetter = (number) => {
    const characters = new Characters();
    return characters.getLetter(number);
};

module.exports = findLetter;