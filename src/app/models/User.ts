export class User {
  name: string;
  counter: number;

  constructor(name: string, counter: number) {
    this.name = name;
    this.counter = counter;
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter(){
    this.counter--;
  }
}
