//create variable to reference 'readline-sync' library
let readlineSync = require('readline-sync');

let bill = parseFloat(readlineSync.question('What is the bill?\n'));

let tipPercent = parseFloat(readlineSync.question('What is the tip percentage?\n'));

let tip = bill * (tipPercent / 100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)} \nThe total is $${total.toFixed(2)}`);