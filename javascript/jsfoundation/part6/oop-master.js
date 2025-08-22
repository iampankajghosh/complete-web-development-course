let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
// console.log(john.name);

Person.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

class Vehical {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

/**
 * Inheritance
 */

class Car extends Vehical {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());

/**
 * Encapsulation
 */

class BankAccount {
  #balance = 0;

  deposite(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
account.deposite(1000);

// console.log(account.getBalance());

/**
 * Abstraction
 */

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }

  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
    let start = this.start();
    let coffee = this.brewCoffee();
    return `${start}, ${coffee}`;
  }
}

let myMachine = new CoffeMachine();

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

/**
 * Polymorphism
 */

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

/**
 * Static method
 */

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

/**
 * Getters and Setters
 */

class Employee {
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this._salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Alice", 50000);
