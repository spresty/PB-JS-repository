function shopping(input) {
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let GPUtotal = GPU * 250;
    let CPUprice = GPUtotal * 0.35;
    let RAMprice = GPUtotal * 0.10;

    let CPUtotal = CPUprice * CPU;
    let RAMtotal = RAMprice * RAM;
    let totalPrice = GPUtotal + CPUtotal + RAMtotal;


    if (GPU > CPU) {
        totalPrice *= 0.85;
    }

    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}
shopping(["920.45",

    "3",

    "1",

    "1"])