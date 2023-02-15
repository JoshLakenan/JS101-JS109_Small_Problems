/*
Function for creating a target array conatinaing all the numbers between 1 and the
target numberchecking the array of numbers for multiples of 3 and 5 and adding them to an array.
*/
let generateTargetArray = targetNum => {
  let arr = [];
  for (let i = 1; i <= targetNum; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) arr.push(i);
  }
  return arr;
}

//callback function for use in the reduce function used later ine program to sum the elements of the result array
let sum = (accumulator, current) => accumulator + current;

//main function
let multisum = tNum => console.log(generateTargetArray(tNum).reduce(sum));


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168







/*
let rls = require('readline-sync');
//gather input for use in the rest of the program from the user.
let input = () => {
  const inputArr = [];
  
  inputArr.push(parseInt(rls.question('Please input a target number: \n')));
  
  inputArr.push(parseInt(rls.question('Please input first multiple: \n')));
  
  inputArr.push(parseInt(rls.question('Please input second multiple: \n')));
  
  return inputArr;
}
*/