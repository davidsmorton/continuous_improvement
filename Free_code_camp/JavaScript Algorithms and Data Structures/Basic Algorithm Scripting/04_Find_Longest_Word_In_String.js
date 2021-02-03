function findLongestWordLength(str) {

  let test = str.split(" ").map(word => word.length);
   console.log(...test)
   console.log(3, 5, 5, 3, 6, 4, 3, 4, 3) 
 return Math.max(...str.split(" ").map(word => word.length));
   
 }
 
 findLongestWordLength("The quick brown fox jumped over the lazy dog");