/*
 * This is the hourglass program
 *
 * @author  Emmanuel Fofeyin 
 * @version 1.0
 * @since   2024-05-06
 */


import { createPrompt } from 'bun-promptx'

const input = createPrompt("Input a number for the hourglass(min 1): ")
const integer = parseInt(input.value || "-1")

printHourglass(integer)

function printHourglass(input: number): void {
    if (input < 1) {
        console.log("Error: Input must be at least 1.")
        return
    }

    // Helper function to generate a string with a specific number of characters
    function generateString(count: number): string {
        let result = ""
        for (let repeat = 0; repeat < count; repeat++) {
            result += " "
        }
        return result
    }

    // Upper half of the hourglass
    for (let repeat = 0; repeat < input; repeat++) {
        const spaces = generateString(repeat)
        let stars = ""
        for (let loop = 0; loop < input - repeat; loop++) {
            stars += "* "
        }
        console.log(spaces + stars); // Manually trim the trailing space
    }

    // Lower half of the hourglass
    for (let repeat = input - 1; repeat >= 0; repeat--) {
        const spaces = generateString(repeat)
        let stars = ""
        for (let loop = 0; loop < input - repeat; loop++) {
            stars += "* "
        }
        console.log(spaces + stars) // Manually trim the trailing space
    }
}

console.log("\nDone")
