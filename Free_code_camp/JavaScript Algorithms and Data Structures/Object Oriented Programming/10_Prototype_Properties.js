function Dog(name) {
  this.name = name;
  Dog.prototype.numLegs = 4;
}



// Only change code above this line
let beagle = new Dog("Snoopy");

//Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.