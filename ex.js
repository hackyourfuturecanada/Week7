const favoriteBooks = [];

// define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
        favoriteBooks.push(bookName);
    }
}

// define printFavoriteBooks() function
function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`);
    // Using the for-of loop for arrays
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
	for (let bookName of favoriteBooks) {
		console.log(bookName);
    }

    // Using a traditional for loop
    // for (let i = 0; i < favoriteBooks.length; i++) {
    //     console.log(favoriteBooks[i]);
    // }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// print out favorite books
printFavoriteBooks();
