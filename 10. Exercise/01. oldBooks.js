function oldBooks(input){
    let i = 0;
    let favouriteBook = input[i];
    i++

    let nextBook = input[i];
    i++

    let bookCounter = 0;
    let bookIsFound = false;

    while (nextBook !== "No More Books"){
        if(nextBook === favouriteBook){
            console.log(`You checked ${bookCounter} books and found it.`);
            bookIsFound = true;
            break;
        }
        bookCounter++
        nextBook = input[i];
        i++
    }

    if(!bookIsFound){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`);
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


