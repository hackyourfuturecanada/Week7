/*1.Define an addFavoriteBook(..) function that receives a single parameter, called bookName.
  2.If the provided bookName string does NOT have the word "Great" in it, add it to the favoriteBooks array.
*/
const favoriteBooks = [];

function addFavoriteBook(bookname){
  if(!bookname.includes('Great')){
    favoriteBooks.push('Great')
  }
  return favoriteBooks + bookname;
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
addFavoriteBook("The Great Gatsby");
/*
/*3.Define a printFavoriteBooks() function that receives no parameters.

  4.printFavoriteBooks() should first print a message like "Favorite Books: ..", and include the number of books in the favoriteBooks array.
  5.Finally, printFavoriteBooks() should loop through the favoriteBooks array and print out each value.

Make sure to then call the printFavoriteBooks() function at the end of the program.

Hint: Use the for ( let .. of .. ) { } style loop.
  */
function printFavoriteBooks(){
  for(let i=0; i<=favoriteBooks.length; i++){
  console.log("Favorite Books:" +favoriteBooks[i]);
}
}
printFavoriteBooks();
