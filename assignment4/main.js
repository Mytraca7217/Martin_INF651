let movieList = []; // Array to store movie objects

// DOM elements
const addMovieBtn = document.getElementById("add-movie-btn");
const movieInput = document.getElementById("movie-name");
const movieListUl = document.getElementById("movie-list");

// Function to add a movie
function addMovie()
 {
    const movieTitle = movieInput.value.trim(); // Get the movie title from input
    if (movieTitle == "") 
    {
        alert("Please enter a movie title.");
        return; // Prevent adding empty titles
    }

    movieList.push(movieTitle); // Add movie title to the array
    movieInput.value = ""; // Clear the input field

    displayMovies(); // Update the displayed movie list

};

//Function to display movie list
function displayMovies()
{
    movieListUl.innerHTML = ""; // Clear the current list

    movieList.forEach((movie, index) => {
        const li = document.createElement("li"); // loop through movies and create new list items
        li.className = "collection-item"; // Added to collection item class for styling with css

        const span = document.createElement("span");
        span.className = "movie-title"; // Added to movie title class for styling with css
        span.textContent = movie; // Set the text content to the movie title

        const removeBtn  = document.createElement("i"); // Create remove icon
        removeBtn.className = "material-icons remove-btn"; // Added to material icons and remove btn class for styling with css
        removeBtn.textContent = "delete"; // Set the icon to delete
        removeBtn.addEventListener("click", () => removeMovie(index)); // Add click event to remove movie

        li.appendChild(span); // Append the span to the list item
        li.appendChild(removeBtn); // Append the remove button to the list item
        movieListUl.appendChild(li); // Append the list item to the movie list element
    });
}

// Function to remove a movie
function removeMovie(index) 
{
    movieList.splice(index, 1); // Remove the movie from the array
    displayMovies(); // Update the displayed movie list
}

// Add movie button event listener
addMovieBtn.addEventListener("click", addMovie);
// Enter key event listener for input field
movieInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") 
    {
        addMovie();
    }
});

