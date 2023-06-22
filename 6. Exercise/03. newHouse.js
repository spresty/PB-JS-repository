function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let finalSum = 0;

    switch (flowerType) {
        case 'Roses':
            finalSum = flowerCount * 5;
            if (flowerCount > 80) {
                finalSum *= 0.9
            }
            break;
        case 'Dahlias':
            finalSum = flowerCount * 3.80;
            if (flowerCount > 90) {
                finalSum *= 0.85;
            }
            break;
        case 'Tulips':
            finalSum = flowerCount * 2.80;
            if (flowerCount > 80) {
                finalSum *= 0.85;
            }
            break;
        case 'Narcissus':
            finalSum = flowerCount * 3.00;
            if (flowerCount < 120) {
                finalSum *= 1.15;
            }
            break;
        case 'Gladiolus':
            finalSum = flowerCount * 2.50;
            if (flowerCount < 80) {
                finalSum *= 1.20;
            }
            break;
    }
    
    if (budget >= finalSum) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - finalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalSum - budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Tulips",

    "88",

    "260"])