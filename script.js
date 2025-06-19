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

// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement}`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has alredy retired`);
//     return -1;
//   }
// };
// yearsUntilRetirement(2005, "Adam");
// yearsUntilRetirement(1950, "Adam");

// TEST
// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// const calcAverage = (round1, round2, round3) => {
//   const averageScore = (round1 + round2 + round3) / 3;
//   return averageScore;
// };
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win ${scoreKoalas} vs ${scoreDolphins}`);
//   } else if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Delphins win ${scoreDolphins} vs ${scoreKoalas}`);
//   } else {
//     console.log("No team wins");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// const Friend1 = "Michael";
// const Friend2 = "Steven";
// const Friend3 = "Peter";

// const Friends = ["Michael", "Steven", "Peter"];
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(Friends[0]);
// console.log(Friends[2]);
// console.log(Friends.length);
// console.log(Friends[Friends.length - 1]);
// Friends[2] = "Jay";
// console.log(Friends);
// const firstName = "Jonas";
// const Jonas = [firstName, "Schemedtmann", 2037 - 1991, "techer", Friends];
// console.log(Jonas);
// console.log(Jonas.length);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// PUSH/POP/UNSHIFT/ IN ARRAY

// const Friends = ["Michael", "Steven", "Peter"];
// const newLenght = Friends.push("Jay");
// console.log(Friends);
// console.log(newLenght);

// Friends.unshift("John");
// console.log(Friends);

// Friends.pop();
// const popped = Friends.pop();
// console.log(popped);
// console.log(Friends);
// Friends.shift();
// console.log(Friends);
// console.log(Friends.indexOf("Steven"));
// console.log(Friends.indexOf("BOB"));

// console.log(Friends.includes("Steven"));

// TEST

// // Tworzymy funkcję, która oblicza napiwek na podstawie kwoty rachunku
// function calcTip(bill) {
//   // Jeśli rachunek mieści się w przedziale od 50 do 300 (włącznie),
//   // zwróć 15% tej kwoty
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     // W przeciwnym razie (mniej niż 50 lub więcej niż 300),
//     // zwróć 20% tej kwoty
//     return bill * 0.2;
//   }
// }

// // Tworzymy tablicę z trzema rachunkami
// const bills = [125, 555, 44];

// // Tworzymy tablicę z napiwkami, obliczonymi z każdego rachunku
// const tips = [
//   calcTip(bills[0]), // napiwek dla 125
//   calcTip(bills[1]), // napiwek dla  555
//   calcTip(bills[2]), // napiwek dla 44
// ];

// // Wyświetlamy tablicę napiwków w konsoli
// console.log(tips); // ➡️ [18.75, 111, 8.8]

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(`Total: ${total}`);

// OBJECT

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: "techer",
//   friends: ["Michael", "Peter", "Steven"],
// };

// DOT VS BRACKET NOTATION

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: "techer",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you whant to know about Jonas? Chose between firstName, Lastname, age, job, and firends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request!  Chose between firstName, Lastname, age, job, and firends"
//   );
// }
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// // CHALLENGE

// // Jonas has 3 friends ,and his best firend is called Michael

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends ,and his best friend is called ${jonas.friends[1]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   age: "techer",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicence: true,

//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // },
// };

// console.log(jonas.calcAge());
// // console.log(jonas["calcAge"](1991));

// TEST

// Tworzymy obiekt 'mark' z właściwościami: pełne imię, masa, wzrost i metoda obliczania BMI
// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height); // Obliczamy BMI i zapisujemy jako nową właściwość 'bmi'
//     return this.bmi; // Zwracamy obliczone BMI
//   }
// };

// // Tworzymy obiekt 'john' z takimi samymi właściwościami i metodą
// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height); // Obliczamy BMI i zapisujemy
//     return this.bmi;
//   }
// };

// // Wywołujemy metody calcBMI(), żeby zapisać wartości bmi do obiektów
// mark.calcBMI();
// john.calcBMI();

// // Porównujemy wartości BMI i wypisujemy odpowiedni komunikat
// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
// } else if (mark.bmi < john.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
// } else {
//   console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})`);
// }

// LOOP

// console.log("lifting weights repetition 1");
// console.log("lifting weights repetition 2");
// console.log("lifting weights repetition 3");
// console.log("lifting weights repetition 4");
// console.log("lifting weights repetition 5");
// console.log("lifting weights repetition 6");
// console.log("lifting weights repetition 7");
// console.log("lifting weights repetition 8");
// console.log("lifting weights repetition 9");
// console.log("lifting weights repetition 10");

// for loop keeps running while codition os TRUE

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i]);
// }
// const years = [1991, 2007, 1969, 2020];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//   age.push(2025 - years[i]);
// }
// console.log(age);

// const jonasArray = [
//   "jonas",
//   "schmedtman",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log("----ONLY STRINGS----");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log("----BREAK WITH NUMBERS----");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] == "number") break;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonas = [
//   "jonas",
//   "schmedtman",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// for (let = exercise = 1; exercise <= 3; exercise++) {
//   console.log(`--------Starting ${exercise}---------`);

//   for (let rep = 1; rep <= 6; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} `);
// }

// WHILE

let rep = 1;

while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} `);
  rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
if (dice === 6) {
  console.log("Loop didint start because 6 was rolled immediately");
} else {
  while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end...");
  }
}
