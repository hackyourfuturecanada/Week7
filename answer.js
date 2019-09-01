//Question 1
function sumOfThree (num1,num2,num3) {
    return num1+num2+num3
  }

//Question 2
function colorCar(x) {
    return `a ${x} car`
}

//Question 3
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

function objectPrinter(person) {
  return (person)
}

//Question 4
function vehicleType (color,code) {
    if (code == 1) {
      return `a ${color} car`
    } else {
      return `a ${color} motorbike`
    }
  }

//Question 5
let result = 3===3? "yes" : "No"
console.log(result)

//Question 6
function vehicle (color,code,age) {
    if (code == 1 && age>0) {
      return `a ${color} used car`
    } else if(code ==2 && age>0) {
      return `a ${color} used motorbike`
    }else if(code ==1 && age==0) {
      return `a ${color} new car`
    } else {
      return `a ${color} new motorbike`
    }
}

//Question 7
listOfVehicles = ["motorbike", "caravan", "bike"]

//QUestion 8
console.log(listOfVehicles[2])

//Question 9
function vehicleType (color,code,age) {
    if (age > 0) {
      return `a ${color} used ${listOfVehicles[code]}`
    } else {
      return `a ${color} new ${listOfVehicles[code]}`
    }
  }