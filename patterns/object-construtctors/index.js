function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

//console.log(Object.getPrototypeOf(Player.prototype));
//console.log(Object.prototype);

//Object.setPrototypeOf(Player.prototype, Person.prototype);
Player.prototype = Person.prototype;
//console.log(Object.getPrototypeOf(Player.prototype));

function Enemy(name) {
  this.name = name;
  this.marker = "^";
}

Enemy.prototype = Person.prototype;
Enemy.prototype.sayName = function () {
  console.log("Ni kudiambo!");
};

const Player1 = new Player("Max", "x");
Player1.sayName();

let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

console.log(car.getBrand()); // Honda
