function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const rangeArray = rangeOfNumbers(startNum, endNum - 1);
    rangeArray.push(endNum)
    return rangeArray

  }
};
// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

// Notes //
// 1. I had the end condition wrong (startNum <= endNum)
// 2. I had the function call wrong ((startNum, endNum) + 1)
// 3. This is a topic I am not comfortable with - I don't have a good handle on it. 

