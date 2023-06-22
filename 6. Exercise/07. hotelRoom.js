function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0;
    let apartment = 0;

    switch (month) {
        case 'May':
        case 'October':
            studio = 50.00;
            apartment = 65.00;
            if (nights > 7 && nights <= 14) {
                studio *= 0.95;
            } else if (nights > 14) {
                studio *= 0.70;
            }
            break;
        case 'June':
        case 'September':
            studio = 75.20;
            apartment = 68.70;

            if (nights > 14) {
                studio *= 0.80;
            }

            break;
        case 'July':
        case 'August':
            studio = 76.00;
            apartment = 77.00;
            break;
    }

    if (nights > 14) {
        apartment *= 0.90
    }

    console.log(`Apartment: ${(apartment * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio * nights).toFixed(2)} lv.`);
}
hotelRoom(["May", "15"])