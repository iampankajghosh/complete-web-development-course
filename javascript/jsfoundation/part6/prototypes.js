let computer = { cpu: 8 };
let lenovo = { screen: "HD", __proto__: computer };
let tomHardware = {};

// console.log("computer ", lenovo.__proto__);

let genericCard = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCard);
console.log("tesla ", Object.getPrototypeOf(tesla));
