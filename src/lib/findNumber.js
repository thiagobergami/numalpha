const Characters = require("./characters");
/**
 * Finds the position of a letter in the English alphabet.
 * 
 * @param {string} letter - The letter whose position in the alphabet is to be found.
 * @returns {number} - The position of the letter in the alphabet (1-26), or 0 if the letter is out of bounds.
 * 
 * @example
 * // Returns 1
 * findNumber('a');
 * 
 * // Returns 26
 * findNumber('z');
 * 
 * // Returns 0
 * findNumber('!');
 */

const findNumber = (letter) => {
    const characters = new Characters

    return characters.getNumber(letter);
}



module.exports = findNumber;



