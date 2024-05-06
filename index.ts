/*
* This program runs with the Triangle class.
*
* @author  Emmanuel FN
* @version 1.0
* @since   2024-05-05
*/

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printPattern(n: number): void {
    let numbers: number[] = [];
    
    // Build the pattern with 2n-1 numbers
    for (let i = 1; i <= n; i++) {
        // Add all numbers from 1 to i
        for (let j = 1; j <= i; j++) {
            numbers.push(j);
        }
        // Add all numbers from i-1 to 1
        for (let j = i - 1; j >= 1; j--) {
            numbers.push(j);
        }
    }

    // Print the pattern with the specified newline conditions
    for (const num of numbers) {
        if (num > 5) {
            console.log(` ${num}`); // Newline after number greater than 5
        } else {
            process.stdout.write(` ${num}`); // Space before each integer
        }
    }
}

rl.question('Enter a positive integer: ', (answer: string) => {
    const n = parseInt(answer, 10);

    if (isNaN(n) || n < 1) {
        console.error('Error: You must enter a positive integer.');
    } else {
        printPattern(n);
    }

    rl.close();
});
