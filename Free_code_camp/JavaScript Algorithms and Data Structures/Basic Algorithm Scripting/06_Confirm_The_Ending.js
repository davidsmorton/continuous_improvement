function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// tried regex ran into trouble when I want to use a variable...forgot about the other methods.