// TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function

const favoriteBooks = ["A Song of Ice and Fire","The Great Gatsby","Crime & Punishment","Great Expectations","You Don't Know JS"];

/*addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
*/

// TODO: print out favorite books
const favoriteBooks = ["A Song of Ice and Fire","The Great Gatsby","Crime & Punishment","Great Expectations","You Don't Know JS"];

function addFavoriteBook(bookName) {
  let bookName = favoriteBooks;
  bookName.includes("Great");
 var nameValue = bookName.includes("Great");
  if (!nameValue){
    console.log(favoriteBooks.push("Great"));
  }

}


const favoriteBooks = ["A Song of Ice and Fire","The Great Gatsby","Crime & Punishment","Great Expectations","You Don't Know JS"];

function printFavoriteBooks() {
  let printBooks = (`FavoriteBooks: ${favoriteBooks.length}`);
   console.log(printBooks);
}
printFavoriteBooks(favoriteBooks);
