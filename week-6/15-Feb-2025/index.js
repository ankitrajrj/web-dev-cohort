
// yaha par hame same blueprint ke multiple objects chahiye
// toh hame manullay create krne honge and sare keys manually add krne honge that's why class come into the picture taki hame baar bar manually kuch add na krna pade

const obj1 = {
  fname: "Ankit",
  lname: "Raj",
  getFullName: function () {
    if (this.lname !== undefined) {
      return `${this.fname} ${this.lname}`;
    }
    return this.fname;
  },
};

// We are voilating DRy Coing Principal

const obj2 = {
  fname: "Manish",
  lname: "raj",
};

obj2.__proto__ = obj1; // obj2 ke __proto__ ko hamne obj1 ko point karwa diya as a parent 

console.log(obj1.getFullName());
console.log(obj2.getFullName());

// Time Stamp 54:47 -- 58:48 - __proto__ explained very weel 
// ham __proto__ k andar tabtak jate hai jabtak wo null na ho jaye .
