// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName){
	if(!bookName.includes("Great"))
		favoriteBooks.push(bookName);
}

const favoriteBooks = [];
addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
// TODO: print out favorite books

function printFavoriteBooks(){
	for(let i = 0; i<favoriteBooks.length; i++){
	console.log(`Your  ${favoriteBooks.length } favorite books are : ${i+1}. ${favoriteBooks[i]}`)
	}
}

printFavoriteBooks();