"use strict";
let hasDriversLicence = false;
const PassTest = true;
if (PassTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive");
function logger() {
  console.log("My namew is Jonas");
}
// CASLLING/RUNNING /INVOKING FUNCTION

logger();
logger();
logger();

function fruitProcesor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuce = fruitProcesor(5, 0);
console.log(appleJuce);
console.log(fruitProcesor(5, 0));
console.log(appleJuce);
const appleOrangeJuice = fruitProcesor(2, 4);
console.log(appleOrangeJuice);
