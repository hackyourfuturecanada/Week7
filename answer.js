// 1.answer

var p1 = 6;
var p2 = 7;
var p3 = 10;
 function tripleFunction (p1,p2,p3) {
   return p1 + p2 + p3
 }

tripleFunction(p1,p2,p3);

// 2.answer

function colorCar(color){
  console.log( 'a' +''+ color +''+ 'car');
}

colorCar("red");

//3.answer

const aboutMe ={
  name : 'Elif',
  surname : 'Yasar',
  age: '19',
  nationality: 'Turkish',
  address: {
    street: 'Hello Street',
    city: 'Toronto'
  },
}

function learnAboutMe(){
  console.log(aboutMe);
}

learnAboutMe();

// 4.answer

function vehcileType(color,code){
  if (code === 1){
    console.log('a'+ color + 'car')
  }
  else {
    console.log('a'+ color + 'motorbike')
  }
}
 vehcileType('blue', 1);

 //5.answer

 console.log(3 === 3 ? 'yes' : 'no');

 //6.answer

 let code = ["car" , "motorbike"]
 function vehicle(color,age,code){

   if (age <= 1){
     console.log('a'+ color + 'new' + code);
   }else if(age >1){
     console.log('a'+''+ color +''+ 'used' +''+ code);
   }

 }
 vehicle("blue", 3 , code[0] )


//7.answer

let listOfVehicles = ["motorbike", "caravan", "bike", "car","ship", "plane",]


//8.answer
console.log(listOfVehicles[2]);

 //9.answer

vehicle("green",1,listOfVehicles[2]);
