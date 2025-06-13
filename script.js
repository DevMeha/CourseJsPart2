// "use strict";
// let hasDriversLicence = false;
// const PassTest = true;
// if (PassTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("I can drive");
// function logger() {
//   console.log("My namew is Jonas");
// }
// // CASLLING/RUNNING /INVOKING FUNCTION

// logger();
// logger();
// logger();

// function fruitProcesor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuce = fruitProcesor(5, 0);
// console.log(appleJuce);
// console.log(fruitProcesor(5, 0));
// console.log(appleJuce);
// const appleOrangeJuice = fruitProcesor(2, 4);
// console.log(appleOrangeJuice);

// FUNCION DECLARATION VS EXPRESSIONS

// FUNCTION DECLARATION

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

//  FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
