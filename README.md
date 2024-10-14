# Num Aplpha

A simple utility library for finding the position of letters in the English alphabet and retrieving letters based on their positions.

## Features

- **Find the position of a letter**: Get the corresponding position of a letter (1 for 'a', 26 for 'z').
- **Find the letter by position**: Retrieve the letter based on its position (1 for 'a', 26 for 'z').

## Installation

You can install the package via npm. 

```bash
npm install numalpha
```

## Usage

Once installed, you can import the methods to use them in your project.

```bash
const { findNumber, findLetter } = require('numalpha');

// Find the position of a letter
console.log(findNumber('a')); // Outputs: 1
console.log(findNumber('z')); // Outputs: 26
console.log(findNumber('!')); // Outputs: 0 (invalid letter)

// Find the letter by position
console.log(findLetter(1)); // Outputs: 'a'
console.log(findLetter(26)); // Outputs: 'z'

// Error handling
try {
    console.log(findLetter(0)); // Throws an error
} catch (error) {
    console.error(error.message); // Outputs: The number must be between 1 and 26! Try again
}
```