//inputs - user input integer greater than zero, user input sum or product

//outputs - the sum or product of all numbers between 1 and the user input integer

/*
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 7


Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

*/

/*
Algorithm

1. Get inputs from user
2. determine whether the uer wants a sum or a product
3. sum or multiply all the nubmers between 1 and the input integer
4. log the results to the console
*/

//create sum function for use in reduce function
let sumArray = (num1, num2) => {
  return num1 + num2;
}

//create product function for use in reduce function
let prodArray = (num1, num2) => {
  return num1 * num2;
}

//create function for creating a target array conatinain all the numbers between 1 and the target number specified by user input
let generateTargetArray = targetNum => {
  let arr = [];
  for (let i = 1; i <= targetNum; i += 1) {
    arr.push(i);
  }
  return arr;
}

//create readline sync variable
let rlsync = require('readline-sync');

// Get target integer
let targetInteger = parseInt(rlsync.question('Please enter an integer greater than 0: \n'));
// further exploration - generate an array between zero and the target integer specified
let targetArray = generateTargetArray(targetInteger);
// get operation string
let operation = rlsync.question('Enter "s" to compute the sum, or "p" to compute the product. \n');

if (operation === 's') {
  

  let result = targetArray.reduce(sumArray);
  
  console.log(`The sum of the integers betwen 1 and ${targetInteger} is ${result}.`);
  
}else if (operation === 'p') {
  
  
  let result = targetArray.reduce(prodArray);
  
  console.log(`The product of the integers betwen 1 and ${targetInteger} is ${result}.`);
  
}else {
  console.log('Error, operation not found.')
}
