function fruitMarket(a, b, c, d, e) {

    let strawberryPrice = Number(a);
    let bananasKG = Number(b);
    let orangesKG = Number(c);
    let raspberriesKG = Number(d);
    let strawberriesKG = Number(e);


    let raspberryPrice = strawberryPrice * 0.5;
    let orangesPrice = raspberryPrice * 0.6;
    let bananasPrice = raspberryPrice * 0.2;

    let raspberrySum = raspberryPrice * raspberriesKG
    let orangesSum = orangesPrice * orangesKG;
    let bananasSum = bananasPrice * bananasKG;
    let strawberriesSum = strawberryPrice * strawberriesKG;

    let totalSum = raspberrySum + orangesSum + bananasSum + strawberriesSum;
    console.log(totalSum.toFixed(2));
}
fruitMarket(48,
    10,
    3.3,
    6.5,
    1.7,
)