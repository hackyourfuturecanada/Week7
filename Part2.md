## More JavaScript questions!

1. Create a function that takes 3 arguments and returns the sum of the these arguments.
functin sum(a,b,c){
	let sum = a+b+c; 
	return sum;
}

2. Create a function named `colorCar` that receives a color, and prints out, _'a red car'_ for example.
function colorCar(color){
	console.log("a "+color+" car");
}


3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

var obj = { 
param1 : "par1" ; 
param2 : "par2" ;
};

4. Create a function named `vehicleType` that receives a color, and a code, 1 for car, 2 for motorbike. And prints _'a blue motorbike'_ for example when called as `vehicleType("blue", 2)`
function vehicleType(color, code){
	if (code==1){
	console.log("a "+color+" car");
}
	else if (code == 2 )P{
	console.log("a "+color+" motorbike");
}
	else {
	console.log(the code is not a valid choise)
}
}

5. Can you write the following without the `if` statement, but with just as a single line with `console.log(...);`?

   ```js
   if (3 === 3) {
     console.log("yes");
   } else {
     console.log("no");
   }
   ```
   (3===3) ? console.log("yes") :console.log("no") ;

6. Create a function called `vehicle`, like before, but takes another parameter called `age`, so that `vehicle("blue", 1, 5)` prints _'a blue used car'_

function vehicle(color, code, age){
	if ( age === 0 ){
			if (code==1){
				console.log("a "+color+"new car");
				}
			else if (code == 2 )P{
				console.log("a "+color+"new motorbike");
				}
			else {
				console.log(the code is not a valid choise)
				}
			}
	else{
			if (code==1){
				console.log("a "+color+"Used car");
				}
			else if (code == 2 )P{
				console.log("a "+color+"Used motorbike");
				}
			else {
				console.log(the code is not a valid choise)
				}
			}
		}
7. Make a list of vehicles, you can add `"motorbike"`, `"caravan"`, `"bike"`, or more.

 const vehicles = [];
 	vehicles.push("motorbike");
 	vehicles.push("caravan");
 	vehicles.push("bike");
 	vehicles.push("car");

8. How do you get the third element from that list?

console.log(vehicles[2]);

9. Change the function `vehicle` to use the list of question 7. So that `vehicle("green", 3, 1)` prints "a green new bike". 
    > Hint, it should use the `code` to get the value from the list. So `vehicle("green", 2, 1)` prints "a green new caravan".
  function vehicle(color, code, age){
	if ( age =< 1){
			console.log("a "+color+" new "+ vehicles[code-1]);
		}
	else () {
			console.log("a "+color+ " old "+ vehicles[code-1]);
			}
		}

			
