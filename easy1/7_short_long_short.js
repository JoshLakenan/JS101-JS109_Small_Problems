let shortLongShort = (str1, str2) => {
  let shorter = str1.length < str2.length ? str1 : str2;
  let longer = str1.length > str2.length ? str1 : str2;
  
  console.log(shorter + longer + shorter);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"