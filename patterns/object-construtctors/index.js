function Person(name) {
  this.name = name;
}

Person.prototype.sayName = () => {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = () => {
  console.log(`My marker is '${this.marker}'`);
};
