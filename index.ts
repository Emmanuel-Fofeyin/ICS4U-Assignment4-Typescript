/*
* This program runs with the Triangle class.
*
* @author  Emmanuel FN
* @version 1.0
* @since   2024-05-06
*/

import { createPrompt } from 'bun-promptx';

// Function to generate the pattern
function generatePattern(number: number) {
    let sequence: any[] = [];

    // Loop through to create the pattern
    for (let integer = 1; integer <= number; integer++) {
        const previousSequence = [...sequence]; // Preserve the previous sequence
        sequence = [...previousSequence, integer, ...previousSequence.reverse()]; // Construct the new sequence
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

// Prompt user for a positive integer, validate input, and generate a pattern if valid.
const input = createPrompt("Enter a positive integer: ")
const number = parseInt(input.value || "-1")

if (isNaN(number) || number < 1) {
    console.log("Error: Please enter a positive integer greater than 0.");
} else {
    generatePattern(number);
}

