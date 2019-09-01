// Q1: Create a function that takes 3 arguments and returns the sum of the these arguments.
function total(n1,n2,n3) {
    return n1 + n2 + n3;
}
console.log(total(2,3,4));

// Q2: Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(count, color, type){
    console.log(`${count} ${color} ${type}`);
}
colorCar("a","red","car");

//Q3: Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
const myFavoriteCar = {
    color: "light blue",
    type: "BMW",
    model: "X6",
    numberOfHorse: 567,
    door: 4
}
function showMyFavoriteCar(){
    console.log(`my favorite car: ${myFavoriteCar.type} ${myFavoriteCar.model} has ${myFavoriteCar.numberOfHorse} horses and has ${myFavoriteCar.door} doors.`);
}
showMyFavoriteCar();

//Q4: Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, type){
    if(type === 1){
        console.log(`${color} car`);
    } else if(type === 2){
        console.log(`a ${color} motorbike`);
    } else {
        console.log("Sorry! Undefined car");
    }
}
vehicleType("blue", 2);

//Q5: Can you write the following without the if statement, but with just as a single line with console.log(...);?
console.log(3 === 3 ? "yes" : "no");

//Q6: Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, type, age){
    if(type === 1){
        console.log(`a ${color} ${age<=1 ? "new car": "used car"}`);
    } else if(type === 2){
        console.log(`a ${color} ${age<=1 ? "new motobike": "used motorbike"}`);
    } else{
        console.log("Sorry! Undefined car");
    }
}
vehicle("blue", 1 , 5);

//Q7: Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
const vehicles =["motobike","caravan","bike","car","SUV"];

//Q8: How do you get the third element from that list?
console.log(vehicles[2]);

//Q9: Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicleWithType(color, type, age){
    if(type <= vehicles.length){
        console.log(`a ${color} ${age<=1 ? "new": "used"} ${vehicles[type-1]}`);
    } else{
        console.log("Sorry! Undefined car");
    }
}
vehicleWithType("green", 3, 1);
vehicleWithType("green", 2, 1);