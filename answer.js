//1
function sum(x,y,z){
	return (x+y+z);
};


//2
function colorCar (color){
	return `${color} car`;
};

//3
function printObj(obj){
	for( prop in obj){
		console.log(prop +" is "+obj[prop]);
	}
}

//4
function vehicleType(color,code){
	if(code == 1)
		return `a ${color} car`;
	if(code == 2)
		return `a ${color} motorbike `;
};

//5 c
console.log((3 === 3) ? "yes" : "no");

//6
function vehicle(color,code,age){
	if(code == 1)
		return `a ${color} used  car`;
	if(code == 2)
		return `a ${color} used motorbike `;
};

//7
let vehicles = ["motorbike","caravan","bike","suv"];

//8
vehicles[2];
//
function vehicleType2(color,code,age){
	if(age > 1)
		return `a ${color} used ${vehicles[code]}`;

		return `a ${color} new ${vehicles[code]}`;
};

