// Note
//Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
 if (candidate.constructor === Dog) {
   return true;
 } else {
   return false;
 }
}

// OR //

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
 if (candidate instanceof Dog) {
   return true;
 } else {
   return false;
 }
}