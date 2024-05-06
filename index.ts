import * as readline from 'readline';

// Create a readline interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate the pattern as specified
const generatePattern = (n: number): void => {
    const sequence: number[] = [];

    // Loop through to create the full pattern
    for (let i = 1; i <= n; i++) {
        // Create the symmetric sequence for this row
        const subSequence: number[] = [];

        // Adding numbers from 1 to i-1 (left side)
        for (let j = 1; j < i; j++) {
            subSequence.push(j);
        }

        // Add the central number `i`
        subSequence.push(i);

        // Append the mirrored sequence (right side), excluding the last item
        for (let j = i - 1; j >= 1; j--) {
            subSequence.push(j);
        }

        sequence.push(...subSequence);
    }

    // Join the sequence with a space and insert newlines after numbers greater than 5
    let output = "";
    for (const num of sequence) {
        output += ` ${num}`;
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
