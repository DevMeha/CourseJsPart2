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

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// //  FUNCTION EXPRESSION

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// ARROW FUNCTIONS
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(yearsUntilRetirement(1991));

// FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcesor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }
// console.log(fruitProcesor(2, 3));

// REVIEVING FUNCTIONS
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has alredy retired`);
    return -1;
  }
};
yearsUntilRetirement(2005, "Adam");
yearsUntilRetirement(1950, "Adam");
