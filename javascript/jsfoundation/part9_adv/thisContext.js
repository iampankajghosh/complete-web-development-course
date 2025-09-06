const person = {
  name: "bot",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

let newPerson = person.greet.bind({ name: "john" });

newPerson();
