
//1.Create a function that takes 3 arguments and returns the sum of the these arguments.
function xyzSum(x,y,z) {
    const sumxyz = x + y + z;
    return sumxyz;
};
console.log(xyzSum(1,2,3));


//2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color){
  console.log("a " + color + " car");

}
colorCar("red");

//3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let obj={
  firstname:"hamza",
  lastname:"koc",
  age:30,
  haircolor:"black"
};


function myFunction() {
  console.log(obj);
  
}
myFunction();



//4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)



function vehicleType(color, code){
  if (code===1){
    console.log("a " + color+ " motorbike");
  }else{
    console.log(code +" " + color + " car")
  }
}

vehicleType("blue",1);



//5.Can you write the following without the if statement, but with just as a single line with console.log(...);?


console.log(3 === 3 ? "yes" : "no");
 


 //6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

//7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

//8.How do you get the third element from that list?

//9.Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".Hint, it should use the code to get the value from the list. So vehicle("green", 2, 1) prints "a green new caravan".



let vehicleList=["airplan","motorbike", "caravan", "bike", ]

function vehicle(color, code, age){

    const vehicleCode=vehicleList[code];
  
  if(age>1 ){
    console.log("a" + color + " used " + vehicleCode )
  }else{
    console.log("a" +" " + color + " new " + vehicleCode )
  }
}
vehicle("green", 2, 1);

