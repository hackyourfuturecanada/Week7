/*1-Create a function that takes 3 arguments and returns the sum of the these arguments.*/
function mobile(x1, x2, x3){
  return x1+x2+x3;
}
mobile(1, 3, 5);
/*2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

*/
function colorCar(color){
  console.log('a'+ ' '+color +' '+'Car')
}
colorCar('red')

/*3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

*/
function information(object){
  console.log(user1)
}
  const user1 = {
    name: 'Hamam',
    email: 'hamam@hamam.ca',
    address: {
        street: '123 Cherry St',
        city: 'Toronto',
        postalCode: 'M2M3X3'
    },
    hobbies: ['learning JavaScript', 'making websites'],
}
information(user1);
/*4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

*/
function vehicleType(value1, value2){
  if(value2===1){
    return value1+ "motorbike"
  }
  else if(value2===2){
    console.log(value1+"Car")
  }
}
vehicleType("blue", 2)

function vehicleType(value1, value2, age){
  if(value2===1 && age===0){
    return value1+ "motorbike is New"
  }
  else if(value2===1 && age>0){
  return value1+ "motorbike is Used"
  }
  else if(value2===2 && age===0){
    console.log(value1+"Car is New")
  }
  else if(value2===2 && age>0){
    console.log(value1+"Car is Used")
  }
}
vehicleType("blue", 1, 0)
/*5.Can you write the following without the if statement, but with just as a single line with console.log(...);?*/
console.log(3===3);


/*Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

8.How do you get the third element from that list?

9.Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
*/

var list=["motorbike", "caravan", "bike"];
var y= list[2];
console.log(y)


function vehicleType(value1, value2, age){
  var value2=["motorbike", "caravan", "bike"];


  if(value2>=1 && age===0){
    return value1+ value2" is New"
  }
  else if(value2===1 && age>0){
  return value1+ value2 "is Used"
  }
  else if(value2===2 && age===0){
    console.log(value1+ value2 "is New")
  }
  else if(value2===2 && age>0){
    console.log(value1+ value2 " is Used")
  }
}
vehicleType("blue", 1, 0)
*/
