function factorialize(num) {
  let arr = [];
  let output = 1;
  if (num === 0) {
    return 1;
  } else {
    for (num = num; num > 0; num--) {
      arr.push(num);
    }
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      output *= arr[i];
      num = output;
    }
    console.log(num);
    return num;
  }
}
factorialize(5);

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.