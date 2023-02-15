let greetings = (name, status) => {
  
  //let fullName = name.reduce((acc, current) => acc + ' ' + current);
  let fullName = name.join(' ');
  
  let title = status.title;
  let occupation = status.occupation;
  
  return `Hello, ${fullName}! Nice to have a ${title} ${occupation} around.`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.