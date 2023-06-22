function vacationBooksList(input){

    let pageCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let totalTimeToRead = pageCount / pagesPerHour;
    let readTimePerDay = totalTimeToRead / daysToRead;

    console.log(readTimePerDay);
}

vacationBooksList(["432 ",

"15 ",

"4 "])