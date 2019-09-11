// Note that question 1 asks us to return the sum.
// We must use the "return" keyword to get some useful output out of our function.
// If you only use console.log() to print the sum inside your function, you will see the sum printed on the 
// console when you run the function, but the function will return undefined instead of returning a result.
// The other questions ask us to print out values, so I used console.log() to print them instead of return.
// But you could use "return" instead, and print out the results.

//1. Create a function that takes 3 arguments and returns the sum of the these arguments.
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
const result = sum(1, 2, 3);
console.log('---Question 1---');
console.log(result);
console.log(sum(5, 5, 5));

// 2. Create a function named `colorCar` that receives a color, and prints out, _'a red car'_ for example.
function colorCar(colour) {
    console.log(`a ${colour} car`);
}
console.log('---Question 2---');
colorCar('purple');

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
const book = {
    author: 'Jon Duckett',
    title: 'JavaScript and JQuery',
    pages: 622,
    currentPage: 300,
    completed: false
};

// Used a for-of loop to loop over this object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// There are other ways to loop over objects too.
function printObject(object) {
    for (property in object) {
        console.log(`${property}: ${object[property]}`);
    }
}
console.log('---Question 3---');
printObject(book);

// 4. Create a function named `vehicleType` that receives a color, and a code, 1 for car, 2 for motorbike. And prints _'a blue motorbike'_ for example when called as `vehicleType("blue", 2)`
function vehicleType(color, code) {
    let vehicleType = '';
    if (code === 1) {
        vehicleType = 'car';
    } else if (code === 2) {
        vehicleType = 'motorbike';
    } else {
        vehicleType = 'unknown vehicle';
    }
    console.log(`A ${color} ${vehicleType}`);
}
console.log('---Question 4---');
vehicleType('red', 2);
vehicleType('green', 1);
vehicleType('black', 100);

// 5. Can you write the following without the `if` statement, but with just as a single line with `console.log(...);`?
//    if (3 === 3) {
//      console.log("yes");
//    } else {
//      console.log("no");
//    }
// since 3 === 3 is always true, this if statement is equivalent to writing console.log("yes")
console.log('---Question 5---');
console.log("yes");
// you could also use the ternary operator to write this in one line
console.log((3 === 3) ? 'yes' : 'no');

// 6. Create a function called `vehicle`, like before, but takes another parameter called `age`, so that `vehicle("blue", 1, 5)` prints _'a blue used car'_

// Note: I just defined a "new" car to be one that's one year old or less
function vehicle(color, code, age) {
    const vehicleAge = (age <= 1) ? 'new' : 'used';
    // You can also use an if statement for vehicle age
    // let vehicleAge = '';
    // if (age <= 1) {
    //     vehicleAge = 'new';
    // } else {
    //     vehicleAge = 'used';
    // }
    let vehicleType = '';
    if (code === 1) {
        vehicleType = 'car';
    } else if (code === 2) {
        vehicleType = 'motorbike';
    } else {
        vehicleType = 'unknown vehicle';
    }
    console.log(`A ${color} ${vehicleAge} ${vehicleType}`);
}
console.log('---Question 6---');
vehicle('blue', 1, 5);
vehicle('orange', 2, 1);
vehicle('grey', 50, 1);

// 7. Make a list of vehicles, you can add `"motorbike"`, `"caravan"`, `"bike"`, or more.
console.log('---Question 7---');
const vehicles = ['motorbike', 'caravan', 'bike', 'car', 'boat', 'train'];
console.log(vehicles);

// 8. How do you get the third element from that list?
console.log('---Question 8---');
console.log('Third element:', vehicles[2]);

// 9. Change the function `vehicle` to use the list of question 7. So that `vehicle("green", 3, 1)` prints "a green new bike". 
//     > Hint, it should use the `code` to get the value from the list. So `vehicle("green", 2, 1)` prints "a green new caravan".

// Based on the examples of what should be printed, the vehicle code that you pass in the function should be decremented by 1
console.log('---Question 9---');
function vehicleFromList(color, code, age) {
    console.log(`A ${color} ${(age <= 1) ? 'new' : 'used'} ${vehicles[code-1]}`);
}
vehicleFromList('yellow', 3, 0.5);
vehicleFromList('green', 3, 1);
vehicleFromList('green', 2, 1);
