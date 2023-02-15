const GREGORIAN_CALENDAR_ADOPTION_YEAR = 1752;

let isLeapYear = year => {
  let d4 = (year % 4 === 0);
  let d100 = (year % 100 === 0);
  let d400 = (year % 400 === 0);
  
  if (d4 && year < GREGORIAN_CALENDAR_ADOPTION_YEAR) {
    console.log(true);
    return true;
  } else {
    console.log(d400 || d4 && !d100);
  }
  

  /* Further exploration answer. Seems more complex.
  switch (true) {
    case !d4 :
      console.log(false);
      break;
    case d4 && !d100 :
      console.log(true);
      break;
    case d100 && d400 :
      console.log(true);
      break;
    default:
      console.log(false);
      break;
  }
  */
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true