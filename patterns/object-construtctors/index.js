function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = () => {
    console.log("say my name " + name);
  };
}

Player.prototype.sayHello = () => {
  console.log("Hello I am a player");
};
Player.prototype.hello = "Hello, guys!";
const player1 = new Player("darius", "o");
const player2 = new Player("ondusu", "x");

player1.sayName();
player2.sayName();
player1.sayHello();

console.log(Object.getPrototypeOf(player1));
console.log(player1.prototype);
