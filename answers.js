//1. Create a function that takes 3 arguments and returns the sum of the these arguments.

function addition(n1, n2, n3) {
  console.log(n1 + n2 + n3);
}

addition(1,2,3)


//2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
  console.log(`a ${color} car`);
}

colorCar("black");


//3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

function printOpject(object) {
  for (let key in object) {
    console.log(`${key} : ${object[key]}`);
  }
}

let myObject = {
  name : "Hack Your Future",
  age  : 2,
  teach : [
            "JavaScript", "HTML", "CSS", "NodeJS", "react", "MySQL"
          ],
  location: "Toronto",
  cost : "free"
};

printOpject(myObject);

//4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
  console.log(`a ${color} ${(code ===2)? "motorbike":"car"}`);
}

vehicleType("blue", 2);

//5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
console.log(3===3);

//6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
  console.log(`a ${color} ${(age > 1)? "used":"new"} ${(code ===2)? "motorbike":"car"}`);
}
vehicle("blue", 1, 5);

//7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more
let vList = ["motorbike", "caravan", "bike", "bus", "car"];

//8. How do you get the third element from that list?
console.log(vList[2]);

//9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicleV2(color, code, age) {
  console.log(`a ${color} ${(age > 1)? "used":"new"} ${vList[code-1]}`);
}
vehicleV2("green", 2, 1);
