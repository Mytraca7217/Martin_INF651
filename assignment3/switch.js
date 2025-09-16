let userInput = prompt("Enter a number between 1 and 12: ");
let month;
switch (parseInt(userInput)) {
    case 1:
        month = "January";
        alert(month);
        break;
    case 2:
        month = "February";
        alert(month);
        break;
    case 3:
        month = "March";
        alert(month);
        break;
    case 4:
        month = "April";
        alert(month);
        break;
    case 5:
        month = "May";
        alert(month);
        break;
    case 6:
        month = "June";
        alert(month);
        break;
    case 7:
        month = "July";
        alert(month);
        break;
    case 8:
        month = "August";
        alert(month);
        break;
    case 9:
        month = "September";
        alert(month);
        break;
    case 10:
        month = "October";
        alert(month);
        break;
    case 11:
        month = "November";
        alert(month);
        break;
    case 12:
        month = "December";
        alert(month);
        break;
    default:
        month = "Invalid input! Please enter a number between 1 and 12.";
        alert(month);
        break;
}