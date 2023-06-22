function cinemaTicket(input){
    let day = input[0];
    let price = 0;

    if(day === "Wednesday" || day === "Thursday"){
        price = 14;
    } else if (day === "Saturday" || day === "Sunday"){
        price = 16;
    } else {
        price = 12
    }
    console.log(price);
}
cinemaTicket(["Sunday"])