let evenNumbers = (from, to) => {
  for (from; from <= to; from += 1) {
    if(from % 2 == 0) console.log(from);
  }
}

evenNumbers(2,10);

evenNumbers(3,10);

evenNumbers(0,10);

evenNumbers(-1,10);

evenNumbers(-2,10);

evenNumbers(2,11);

