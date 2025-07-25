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

const player1 = new Player("Malcom", "x");
const player2 = new Player("Joel", "O");

player1.sayName();
player1.getMarker();
player2.sayName();
player2.getMarker();
