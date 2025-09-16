const pin = 1154;
let userPin;
do {
    userPin = prompt("Enter your pin: ");
    console.log("Invalid Pin, try again.");
} while (userPin != pin);
console.log("You have entered the correct pin.");