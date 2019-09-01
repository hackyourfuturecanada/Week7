const favoriteBooks = [];

function addFavoriteBook (bookName) {
    if (bookName.includes("Great")!== true) {
        favoriteBooks.push(bookName)
    }
}

// TODO: define printFavoriteBooks() function

function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`)
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks()

for (let i of favoriteBooks) {
  console.log(i)
}
