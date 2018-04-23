// let nameLet = "jen";

// nameLet = "James";

// console.log("nameLet", nameLet)

// const square = function(x) {
//   return x * x; 
// };

// const squareArrow = (x) => x * x;
// console.log(squareArrow(8));

// const regularArrow = (fullName) => {
//   return fullName.split(' ')[0];
// }
// console.log(regularArrow("Marci Fey"))

// const shortArrow = (fullName) => fullName.split(' ')[0];
// console.log(shortArrow("Marci Fey"))

const multiplier = {
  numbers: [2, 3, 4, 5],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
}

console.log(multiplier.multiply());