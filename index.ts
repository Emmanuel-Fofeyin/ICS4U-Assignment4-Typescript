/*
* This program runs with the Triangle class.
*
* @author  Emmanuel FN
* @version 1.0
* @since   2024-05-06
*/

import { createPrompt } from 'bun-promptx';

// Create a prompt interface to read input from the user
const prompt = createPrompt();

// Function to generate the pattern
const generatePattern = (n) => {
    let sequence = [];

    // Loop through to create the pattern
    for (let i = 1; i <= n; i++) {
        const previousSequence = [...sequence]; // Preserve the previous sequence
        sequence = [...previousSequence, i, ...previousSequence.reverse()]; // Construct the new sequence
    }

    // Build the final output with the given structure
    let output = "";
    for (const num of sequence) {
        output += ` ${num}`; // Add a space before each number
        if (num > 5) {
            output += "\n"; // Insert a newline after numbers greater than 5
        }
    }

    console.log(output.trim()); // Print the final output
};

// Ask the user for a positive integer input
createPrompt('Enter a positive integer: ').then(answer => {
    const n = parseInt(answer);

    if (isNaN(n) || n < 1) {
        console.log("Error: Please enter a positive integer greater than 0.");
    } else {
        generatePattern(n);
    }

    console.log("\nDone.");
});
