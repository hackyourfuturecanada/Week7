// Q-1. Create a function that takes 3 arguments and returns the sum of the these arguments
function sumOfThree(number1, number2, number3)  { // add an input by adding a variable. These are our parameters.
  // body of this function - define a logic.
  var sum = (number1 + number2 + number3);
  //console.log(sum);
  //return sum; // it returns a VALUE! that's its primary job
}
sumOfThree(1, 3, 4);// Call the function, give the variable a value. And they are called our arguments.
/*---------------------------------------------------------------------------*/
// Q-2. Create a function named `colorCar` that receives a color, and prints out, _'a red car'_ for example.
function colorCar(color)  {
  var whatColor = ("red");
  console.log("A",whatColor,"car");
}
colorCar("red");
/*---------------------------------------------------------------------------*/
// Q-3. Create an object and a function
// - that takes the object as a parameter
// - and prints out all of its properties and values.

// Objects = are like real life objects like Car, it has properties that do things. Drive, turn, accelerate.
var constructObject = { //Create an object
  name: 'Aalitenaye',
  lastName: 'Sattari',
  age: 30,
  email: 'aalitenaye.sattari@gmail.com',
  location: 'Ontario St. Toronto, Canada',
  job: 'Admin Assistant',
  interest: 'Biking',
  friends: ['Lensy', 'Aman', 'Eman']
};
function printObject() { // Create a Function that takes the object as a parameter
  console.log(constructObject.name);
  console.log(constructObject.lastName);
  console.log(constructObject.age);
  console.log(constructObject.email);
  console.log(constructObject.location);
  console.log(constructObject.job);
  console.log(constructObject.interest);
  console.log(constructObject.friends);
}
printObject();
/*---------------------------------------------------------------------------*/
// Q-4. Create a function named `vehicleType`
//- that receives a color, and a code, 1 for car, 2 for motorbike.
//- And prints _'a blue motorbike'_ for example when called as `vehicleType("blue", 2)`
function vehicleType(color, code) {
    if (code == 2) {
      code = "motorbike";
    } else if (code == 1) {
      code = "car";
    }  console.log("A", color, code);
  }
vehicleType("white", 2);
vehicleType("red", 1);
/*---------------------------------------------------------------------------*/
/* Q-5. Can you write the following without the `if` statement, but with just as a single line with `console.log(...);`?
   ```js
   if (3 === 3) {
     console.log("yes");
   } else {
     console.log("no");
   }
   ```*/
console.log("If 3 equals 3, then it is a YES. Otherwise it is a NO");
/*---------------------------------------------------------------------------*/
// Q-6. Create a function called `vehicle`, like before, but takes another parameter called `age`, so that `vehicle("blue", 1, 5)` prints _'a blue used car'_
function vehicle(color, age, code)  {
    if (age == 1) {
      age = "used";
    } if (code == 5) { // This is nested if statements if we have couple conditions that are true.
      code = "car";
    } console.log("A", color, age, code);
  }
vehicle("Black", 1, 5);
/*----------------------------------------------------------------------------*/
// Q-7. Make a list of vehicles, you can add `"motorbike"`, `"caravan"`, `"bike"`, or more.
// Q-8. How do you get the third element from that list?
let array = ['Corola', 'Farrari', 'Mastang'];
arr[2];
arr.push('motorbike', 'caravan', 'bike', '');
console.log();

// NOT SURE IF THIS IS RIGHT?
/*----------------------------------------------------------------------------*/
/* Q-9. Change the function `vehicle` to use the list of question 7. So that `vehicle("green", 3, 1)` prints "a green new bike".
    > Hint, it should use the `code` to get the value from the list. So `vehicle("green", 2, 1)` prints "a green new caravan".*/
// I NEED HELP HERE. 
