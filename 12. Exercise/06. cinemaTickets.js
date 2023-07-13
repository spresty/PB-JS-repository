function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTicketCounter = 0;

    while (command !== "Finish") {
        let name = command;
        index++
        let freeSeats = Number(input[index]);
        index++

        let ticketType = input[index];
        let CurrentTicketCounter = 0;

        while (ticketType !== "End") {
            CurrentTicketCounter++

            switch (ticketType) {
                case "standard": standardCounter++; break;
                case "kid": kidCounter++; break;
                case "student": studentCounter++; break;
            }
            if (CurrentTicketCounter >= freeSeats) {
                break;
            }
            index++
            ticketType = input[index];

        }
        totalTicketCounter += CurrentTicketCounter;

        let resultSingleFilm = CurrentTicketCounter / freeSeats * 100;
        console.log(`${name} - ${resultSingleFilm.toFixed(2)}% full.`);


        index++
        command = input[index];
    }
    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${(studentCounter / totalTicketCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalTicketCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalTicketCounter * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])