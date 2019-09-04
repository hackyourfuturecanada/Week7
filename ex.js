// TODO: define addFavoriteBook(..) function

const favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

function addFavoriteBook(bookName) {
  if (!bookName.includes('Great')){
    favoriteBooks.push(bookName);
  }
}
console.log(favoriteBooks);

// TODO: define printFavoriteBooks() function

function printFavoriteBooks(){
  console.log('There are' +  favoriteBooks.length  + 'favorite books.');
  for (let favbooks of favoriteBooks){
    console.log(favbooks);
  }
}

// TODO: print out favorite books
printFavoriteBooks(favoriteBooks);
