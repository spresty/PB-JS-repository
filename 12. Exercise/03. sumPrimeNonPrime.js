function sumPrimeNonPrime(input) {

    let sumSimpleNum = 0;
    let sumComplexNum = 0;
    let index = 0;
    let currentInput = input[index];
    let isComplex = false;

    while (currentInput !== "stop") {
        let currentNum = Number(currentInput);

        if (currentNum < 0) {
            console.log(`Number is negative.`);
            index++
            currentInput = input[index];
            continue;
        } else {
            for (let i = 2; i < currentNum; i++) {
                if (currentNum % i === 0) {
                    isComplex = true;
                    break;
                }
            }
        }

        if (isComplex) {
            sumComplexNum += currentNum
            isComplex = false;
        } else {
            sumSimpleNum += currentNum
        }

        index++
        currentInput = input[index];
    }

    console.log(`Sum of all prime numbers is: ${sumSimpleNum}`);
    console.log(`Sum of all non prime numbers is: ${sumComplexNum}`);
}
 sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"])