// tried do...while loop should have used while loop

function repeatStringNumTimes(str, num) {
  let repeatStr = "";
  while (num > 0) {
    repeatStr += str;
    num--;
  }
  console.log(repeatStr)
  return repeatStr
  }
  
  repeatStringNumTimes("abc", 3);

  // Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.