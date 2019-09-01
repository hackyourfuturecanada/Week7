//1

function flowersabc (a, b, c){
  console.log(a + b + c);
}

flowersabc(3, 5 ,7 );

//2

function colorCar(color){
  console.log("a " + color + " car")
}

colorCar("blue");

//3

let canada = {
   
  people: "kind",
  economy: "not bad not good", 
  numberOfProvience: 13
};

function myFunction() {
  console.log(canada);
  
}
myFunction();

//4

function vehicleType(color, code){
  if (code===1){
    console.log("a " + color+ " motorbike");
  }else{
    console.log(code +" " + color + " car")
  }
}

vehicleType("yellow",3);

//5

console.log(3 === 3? "yes" : "no")

//6//7//8//9

let vehicleList=["atv","motorbike", "caravan", "bike", ]

function vehicle(color, code, age){

    const vehicleCode=vehicleList[code];
  
  if(age>1 ){
    console.log("a" + color + " used " + vehicleCode )
  }else{
    console.log("a" +" " + color + " new " + vehicleCode )
  }
}
vehicle("green", 1, 3);


