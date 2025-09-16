 // initializing the user input
let userInput = prompt("Enter a number: ");

if (userInput < 0)  // condition to check if the number is negative.
{
    alert("The number is negative.");
}
else if (userInput == 0) // condition to check if the number is zero.
{
    alert("The number is zero.");
}
else // if number is neither negative nor zero, it must be positive.
{
    alert("The number is positive.");
}