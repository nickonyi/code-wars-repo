class Block {
  constructor(data) {
    this.data = data;
  }

  // ...
  getWidth = () => this.data[0];

  getLength = () => this.data[1];

  getHeight = () => this.data[2];

  getVolume = () => this.data[0] * this.data[1] * this.data[2];

  getSurfaceArea = () =>
    2 *
    (this.data[0] * this.data[1] +
      this.data[1] * this.data[2] +
      this.data[0] * this.data[2]);
}

let b = new Block([2, 4, 6]);
console.log(b.getVolume());
