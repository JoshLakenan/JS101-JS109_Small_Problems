let rls = require('readline-sync');

let fNum = parseInt(rls.question('Enter the first number: \n'));
let sNum = parseInt(rls.question('Enter the second number: \n'));

let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;
let modulo = (num1, num2) => num1 % num2;
let power = (num1, num2) => num1 ** num2;


const operators = [['+', add], ['-', subtract], ['*', multiply], ['/', divide], ['%', modulo], ['**', power]];


operators.forEach(operator => {
  console.log(`${fNum} ${operator[0]} ${sNum} = ${operator[1](fNum, sNum)}` );
});
