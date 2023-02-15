//declare static conversion value for reference in the function
const SQUARE_FEET_PER_SQUARE_METER = 10.7639;

//create method to get input from the user and log the size of the room 
let roomSize = () => {
  
  //create variable to reference 'readline-sync' library
  let readlineSync = require('readline-sync');
  
  //log instructions to the console and then store the result of the user entered input to a input variables using the prompt method
  console.log('Enter the length of the room in meters: ');
  let inputLength = parseInt(readlineSync.prompt(),10);

  console.log('Enter the width of the room in meters: ')
  let inputWidth = parseInt(readlineSync.prompt(),10)
  
  //convert inputvariables into output variables using reference conversion info
  let squareMeters = inputLength * inputWidth;
  let squareFeet = squareMeters * SQUARE_FEET_PER_SQUARE_METER;
  
  //format and log the output
  console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`)
}

//invoke the function
roomSize();











/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs
the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).


*/

//inputs - length of room in meters, width of room in meters

//outputs - log the area of the room to the console in both square meters and square feet.

// domain knowledge - 1 square meter == 10.7639 square feet

// rules - Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

//implicit rules - return numbers with two decimal places

//data structure / algorithm, - request the info from the user and assign their responses to variables, convert the values stored to those variable into the correct format, output the variables using console.log


