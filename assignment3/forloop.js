let userInput;  // initializing the user input 

userInput = prompt("Enter a number: ");

for(i=1; i<=10 ; i++) { // sets parameter to ensure the loop stops at 10.
   if (i==5) // set condition to break and skip the multiple of 5.
    {
        continue;
    }
    console.log(i*userInput); // prints the multiplication table of the user input.
}