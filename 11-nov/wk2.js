const MyNameSpace = {
  MyClass: class {
    constructor(message) {
      this.message = message;
    }
    sayHello() {
      return this.message;
    }
  },
};

const myObject = new MyNameSpace.MyClass("hello");
const phrase = myObject.sayHello();
console.log(phrase);
