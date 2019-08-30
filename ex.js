// TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function

const favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
printFavoriteBooks();


function addFavoriteBook(bookName){
	 
	var n = bookName.includes("Great");
	if (!n){
		favoriteBooks.push(bookName);
	}
}

function printFavoriteBooks(){
  console.log("Favorite Books :"+ favoriteBooks.length);
  for(let elements of favoriteBooks){
	console.log(elements);
  }
}

// TODO: print out favorite books
