/**
 * A class to work with alphabet characters and their positions.
 */


class Characters {
    static alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    

    /**
     * Gets the number of the given letter in the English alphabet.
     * 
     * @param {string} letter - The letter to find the number for.
     * @returns {number} - The number corresponding to the letter in the alphabet (1-26), or 0 if out of bounds.
     */

    getNumber(letter){
        const index = Characters.alphabet.indexOf(letter);
        if (index === -1) {
            console.warn('Out of bounds! Returning 0');
            return 0; // Out of bounds
        }
        return index + 1;
    }


    /**
     * Gets the letter corresponding to the given number in the alphabet.
     * 
     * @param {number} number - The number to find the letter for (1-26).
     * @returns {string} - The letter corresponding to the number.
     * @throws Will throw an error if the number is out of bounds.
     */
    getLetter(number){
        if (number < 1 || number > 26) {
            throw new Error('The number must be between 1 and 26! Try again');
        }
        return Characters.alphabet[number - 1];        
    }
}

module.exports = Characters;