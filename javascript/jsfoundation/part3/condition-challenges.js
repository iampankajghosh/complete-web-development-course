// Checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;

console.log("I am regular uppar code.");

if (num1 > num2) {
  console.log("Num 1 is greater than num2");
} else {
  console.log("Nope, Num 1 is NOT greater");
}

console.log("I am regular bottom code.");

// Checking if a string is equal to another string:

let username = "hello world";
let anotherUsername = "hello world";

if (username == anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

// Checking if a variable is a number or not

let score = "44";

if (typeof score === "number") {
  console.log("Yep, This is a number");
} else {
  console.log("No that is not a number");
}

// Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log("Tea is NOT ready");
}

// Checking if a array is empty or not

let items = [];

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is NOT emply");
}
