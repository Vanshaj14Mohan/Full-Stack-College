// // function addition(a, b){
// //     return a+b;
// // }

const { multiplication } = require("./file");

// // module.exports = addition();


// // function addition(a, b) {
// //     return a + b;
// //   }
  
// // module.exports = addition(); // Exports the result of 2 + 3

// function addition(a,b){
//   return a+b;
// }

// module.exports = addition;

function addition(a,b){
  return a+b;
}

function multilplication(a,b){
  return a*b;
}

module.exports = {addition, multiplication};