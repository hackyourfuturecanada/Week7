// TODO: define addFavoriteBook(..) function
const favoriteBooks = [];

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) { // if this not true
  favoriteBooks.push(bookName) // do this.
} console.log(favoriteBooks);
}
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
} console.log("Favorite Books", favoriteBooks.length);

// TODO: print out favorite books
/*Finally, printFavoriteBooks() should loop through the favoriteBooks array and print out each value.
Make sure to then call the printFavoriteBooks() function at the end of the program.
Hint: Use the for ( let .. of .. ) { } style loop.*/
for (let i = 0; i < favoriteBooks.length; i++) {
   console.log(i);
}
