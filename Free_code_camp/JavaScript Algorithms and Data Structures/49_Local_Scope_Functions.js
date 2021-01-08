function myLocalScope() {

  // Only change code below this line
var myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//myVar is local to myLocalScope if there was a value it would show. 