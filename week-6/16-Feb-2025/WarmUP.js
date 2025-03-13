//-------------------------------------------------------------------
// jab bhi koi function banega toh har functionke sath .describe aaega
Function.prototype.describe = function () {
  console.log(`function Name is ${this.name}`);
  // ye name actually me yaha bta rha hai ki ush functin ka naam kya th ajihsne muhe bulaya
};

function greet(name) {
  return `Hello ${name}`;
}

const func1 = new greet();

console.log(greet("AJ"));
greet.describe(); // jo Function Bulaega ye ushe ka naam print krega .

//------------------------------------------------------------------

// function declaration
function add(c, z) {
  return c + z;
}
// fucntion expression
const substract = function (a, b) {
  return a - b;
};
// arrow function
const multiply = (a, b) => a * b;

// First Class Function .
function applyOperation(a, b, Operation) {
  return Operation(a, b); // returning function
}
// ek function as a parameter bhi ham pass kar sakte hai
// or ek fucntion - dushre function se return hoke bhi aasakta hai .

const result = applyOperation(4, 5, (x, y) => x + y);
console.log(result);

//-----------------------------------------------------------------

(function () {
  console.log("Hi Ankit");
})();

(function (name) {
  console.log("Hello, " + name + "!");
})("Alice");

// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.