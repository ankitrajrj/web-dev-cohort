class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}

const p1 = new Person("Ankit", "Raj");
const p2 = new Person("rayan", "Kumar");

console.log(p1);
console.log(p2);
