import * as readline from 'readline';

// Create a readline interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate the pattern as specified
const generatePattern = (n: number): void => {
    const sequence = [];

    // Loop through to create a symmetric pattern of numbers
    for (let i = 1; i <= n; i++) {
        const subSequence = [];
        for (let j = 1; j < i; j++) {
            subSequence.push(j);
        }
        subSequence.push(i);  // Include the current "i" value
        sequence.push(...subSequence.reverse(), ...subSequence.slice(1));
    }

    // Join the sequence with a space and insert newlines after numbers greater than 5
    let output = "";
    for (const num of sequence) {
        output += " " + num;
        if (num > 5) {
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

    rl.close();  // Close the readline interface
});
