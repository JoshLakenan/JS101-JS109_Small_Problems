let multiply = (num1, num2) => num1 * num2;

let square = (num, power) => {
  
  let result = num;
  
  for (let i = 2; i <= power; i += 1) {
    result = multiply(result, num);
  }
  console.log(result);
  return result;
}
  

console.log(square(5,2) === 25); // logs true
console.log(square(-8,2) === 64); // logs true