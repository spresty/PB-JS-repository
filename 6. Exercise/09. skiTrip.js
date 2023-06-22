function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let totalSum = 0;

    switch (roomType) {

        case "room for one person":
            totalSum = nights * 18.00;
            break;
        case "apartment":
            totalSum = nights * 25.00;
            if (days < 10) {
                totalSum *= 0.70;
            } else if (days >= 10 && days <= 15) {
                totalSum *= 0.65;
            } else {
                totalSum *= 0.50;
            }
            break;
        case "president apartment":
            totalSum = nights * 35.00;
            if (days < 10) {
                totalSum *= 0.90;
            } else if (days >= 10 && days <= 15) {
                totalSum *= 0.85;
            } else {
                totalSum *= 0.80;
            }
            break;
    }
    
    if(feedback === "positive"){
        console.log((totalSum * 1.25).toFixed(2));
    } else {
        console.log((totalSum * 0.90).toFixed(2));
    }
}
skiTrip(["30","president apartment","negative"])