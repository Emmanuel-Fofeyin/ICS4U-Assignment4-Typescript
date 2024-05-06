/*
* This program runs with the Triangle class.
*
* @author  Emmanuel FN
* @version 1.0
* @since   2024-05-06
*/


import * as readline from 'readline';

// Create a readline interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate the pattern as specified
const generatePattern = (n: number): void => {
    const sequence: string[] = [];

    // Create the full sequence with symmetry around each central number
    for (let i = 1; i <= n; i++) {
        const currentRow: number[] = [];

        // Construct the symmetrical pattern for the current row
        // Left part: from 1 to i-1
        for (let j = 1; j < i; j++) {
            currentRow.push(j);
        }

        // Middle part: the current i value
        currentRow.push(i);

        // Right part: from i-1 to 1 (reverse order)
        for (let j = i - 1; j >= 1; j--) {
            currentRow.push(j);
        }

        // Append current row to the main sequence, separated by a space
        sequence.push(currentRow.map(num => ` ${num}`).join(''));
    }

    // Print the final pattern with appropriate newlines
    const output = sequence.join('\n');
    console.log(output);
};

// Ask the user for a positive integer input
rl.question("Enter a positive integer: ", (answer) => {
    const n = parseInt(answer);

    if (isNaN(n) || n < 1) {
        console.log("Error: Please enter a positive integer greater than 0.");
    } else {
        generatePattern(n);
    }

    rl.close(); // Close the readline interface
});
