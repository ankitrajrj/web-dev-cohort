// Constructor function - House, jaise ek blueprint
function House(color, rooms) {
  this.color = color;
  this.rooms = rooms;
}

// Yahan, House ka prototype ek blueprint hai jismein hum sabhi houses ke liye ek common method define karte hain.
House.prototype.describe = function () {
  console.log(`This house is ${this.color} and has ${this.rooms} rooms.`);
};

// Ab ek naya house (object) banate hain is blueprint (constructor) se
let myHouse = new House("blue", 3);

// Ye object apne andar ek hidden note rakhta hai, jiska naam hai [[Prototype]].
// Is hidden note mein reference hota hai House.prototype.
// Matlab: myHouse ke paas directly "describe" method nahi hai,
// lekin jab aap myHouse.describe() call karte hain,
// JavaScript hidden note ([[Prototype]]) se us method ko dhoond leta hai.
myHouse.describe(); // Output: This house is blue and has 3 rooms.

// Agar aap us hidden note ko dekhna chahte hain, to aap __proto__ ka use kar sakte hain.
// Yeh __proto__ aapko batata hai ki myHouse ka hidden note (yaani [[Prototype]]) kya hai.
console.log(myHouse.__proto__ === House.prototype); // Output: true
