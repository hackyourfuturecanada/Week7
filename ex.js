const favoriteBooks = [];

function addFavoriteBook(bookName) {
  if (!bookName.includes('Great')) {
    favoriteBooks.push(bookName);
  }
}
addFavoriteBook('A Song of Ice and Fire');
addFavoriteBook('The Great Gatsby');
addFavoriteBook('Crime & Punishment');
addFavoriteBook('Great Expectations');
addFavoriteBook("You Don't Know JS");
function printFavoriteBooks() {
  console.log('Favorite Books: ' + favoriteBooks.length);
  for (const i of favoriteBooks) {
    console.log(i);
  }
}
printFavoriteBooks();

function sumNumbers(no1, no2, no3) {
  return no1 + no2 + no3;
}

function colorCar(color) {
  console.log('a ' + color + ' car');
}

function printObject(items) {
  console.log(JSON.stringify(items));
}

function vehicleType(color, code) {
  if (code === 1) {
    console.log('a ' + color + ' car');
  } else {
    console.log('a ' + color + ' motorbike');
  }

  console.log(3 === 3 ? 'yes' : 'no');
}

function vehicle(color, code, age) {
  if (code === 1) {
    console.log('a ' + color + ' used car');
  } else {
    console.log('a ' + color + ' used motorbike');
  }
}

const listOfVehicles = [
  'motorbike',
  'caravan',
  'bike',
  'car',
  'bus',
  'train',
  'plain'
];

function printThirdItem() {
  console.log(listOfVehicles[2]);
}

printThirdItem();

function vehicle(color, code, age) {
  console.log('a ' + color + ' new ' + listOfVehicles[code - 1]);
}
