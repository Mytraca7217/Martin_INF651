// Bring in HTML elements
const nameInput = document.getElementById('nameInput'); // Input field for name
const submitButton = document.getElementById('SubmitButton'); // submit button
const outputDiv = document.getElementById('outputDiv'); // Div to display output
const mouseTracker = document.getElementById('mouseTracker'); // Div to track mouse
const coordinates = document.getElementById('coordinates'); // Div to show coordinates

//Function for form submission
function handleSubmit() 
{
    const name = nameInput.value.trim(); //gets name from input field and removes extra spaces
    if(name=="")
    {
        outputDiv.textContent = "Error: Please provide a name."; //if no name provided, error message is shown. 

        //style for error message
        outputDiv.style.backgroundColor = "transparent";
        outputDiv.style.color = "red";
        outputDiv.style.borderColor = "red";
    }
    else //if name is entered, the following will show. 
    {
        outputDiv.textContent = `Welcome, ${name}!`; //welcome message with name provided by input

        //Style for welcome message 
        outputDiv.style.backgroundColor = "green";
        outputDiv.style.color = "white";
        outputDiv.style.borderColor = "green";
    }
}

//Click Event to submit form 
submitButton.addEventListener('click', handleSubmit);

//Keyboard Event for 'Enter' key submission
nameInput.addEventListener('keypress', function(event) 
{
    if(event.key === 'Enter') //checks if 'Enter' key is pressed
    {
        event.preventDefault(); //prevent default form submission
        handleSubmit(); //calls handleSubmit function to submit form
    }
});

//Mouse Event to track coordinates when mouse moves inside the box
mouseTracker.addEventListener('mousemove', function(event)
{
    const rect = mouseTracker.getBoundingClientRect(); //gets mouse tracker's position and size of box

    const x = event.clientX - rect.left; //calculates x coordinate in box
    const y = Math.round(event.clientY - rect.top); //calculates y coordinate in box rounded to nearest whole number(it was always adding .125 and i didnt't like it.)

    coordinates.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`; //shows coordinates in real time
});

//Reset coordnates if mouse leaves box
mouseTracker.addEventListener('mouseleave', function() 
{
    coordinates.textContent = `Mouse Coordinates: X: 0, Y: 0`;
});