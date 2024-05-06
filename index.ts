import * as readline from 'readline';

// Create a readline interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate the pattern as specified
const generatePattern = (n: number): void => {
    const sequence: number[] = [];

    // Loop through to create a symmetric pattern of numbers
    for (let i = 1; i <= n; i++) {
        const subSequence: number[] = [];

        // Build the left section of the pattern
        for (let j = 1; j < i; j++) {
            subSequence.push(j);
        }

        // Add the center value
        subSequence.push(i);

        // Build the right section of the pattern, mirroring the left
        for (let j = i - 1; j >= 1; j--) {
            subSequence.push(j);
        }

        // Append the symmetrical subSequence to the main sequence
        sequence.push(...subSequence);
    }

    // Prepare the output string with the desired formatting
    let output = "";
    for (let i = 0; i < sequence.length; i++) {
        output += ` ${sequence[i]}`;
        
        // Insert a newline after numbers greater than 5
        if (sequence[i] > 5 && i < sequence.length - 1) {
            output += "\n";
        }
    }

    console.log(output.trim());
};

// Ask the user for an integer input
rl.question("Enter a positive integer: ", (answer) => {
    const n = parseInt(answer);

    if (isNaN(n) || n < 1) {
        console.log("Error: Please enter a positive integer greater than 0.");
    } else {
        generatePattern(n);
    }

    rl.close(); // Close the readline interface
});
