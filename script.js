function firstWord(s) {
  // your code here
  str = s.split(" ");
  return str[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
