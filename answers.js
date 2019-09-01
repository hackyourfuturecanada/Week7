function addThreeNumbers(n1,n2,n3) {
    return n1 + n2 +n3;
}
addThreeNumbers(3,4,5);

let color = "blue";
function colorCar(color) {
console.log('a '+ color +' car')

}
colorCar("blue");



const bioB = {
    name: 'Bahriye',
    username: 'cbahriye88',
    address: {
        street: '123 Apple St',
        city: 'Toronto',
        postalCode: 'M2M3X3'
    },
    hobbies: ['learning JavaScript', 'making websites'],
    age: 31,
    'hair colour': 'brown',

    }
  for (let item in bioB) {
    console.log(bioB[item]);
}





let code = 2;
function vehicleType(color,code){
    if (code === 1) {
      console.log('a ' + color + ' car');
    } else {
      console.log('a ' + color + ' motorbike');
    }
}
 vehicleType("blue", 2);



  console.log(3 === 3? "yes" : "no");



function vehicleType(color,code,age){
    if (code === 1) {
      console.log('a '+ ${(age <=1)? "new":"used"} + color + ' car');
    } else {
      console.log('a '+ ${(age <=1)? "new":"used"} + color + ' motorbike');
    }
}
 vehicleType("blue", 2, 2);

let vehicleList = ['bike','car','e-scooter'];
console.log(vehicleList[3]);


function vehicleFinal(color, code, age) {
  console.log(`a ${(age <= 1)? "new":"used"}  ${color} ${vechicleList[code-2]}`);
}
vehicleFinal("green", 2, 2);
