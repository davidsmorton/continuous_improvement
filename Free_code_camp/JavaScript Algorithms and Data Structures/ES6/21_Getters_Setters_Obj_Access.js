// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// My try...I'm not sure I understand this. I missed the "this on each getter and setter"
class Thermostat {
  constructor (tempFar) {
      this._tempFar = tempFar;
}
// getter
get temp() {
  
  return (
      5 / 9 * (tempFar - 32)
  );
}
//setter 
set temp(tempCel) {
  this._tempFar = tempCel * 9 / 5 + 32;
  } 
}