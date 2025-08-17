// Number

let balance = 120;
let anotherBalance = new Number(120); // not recommended

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// Null and Undefined

let firstname = null;
let lastname = undefined;

// console.log(firstname);
// console.log(lastname);

// String

let myString = "hello";
let myString1 = "world";

let oldGreet = myString + " " + "pankaj";
// console.log(oldGreet);

let username = "pankaj";
let greetMessage = `Hello ${username}!`;
let demoOne = `Value is ${2 * 2}`;

// console.log(greetMessage);
// console.log(demoOne);

// Symbol

let sm1 = Symbol("hello");
let sm2 = Symbol("world");

// console.log(sm1 == sm2);
