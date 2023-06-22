function depositCalculator(input){

    let depositedSum = Number(input[0]);
    let term = Number(input[1]);
    let annualPercentage = Number(input[2]);

    let totalSum = depositedSum + term * (depositedSum * (annualPercentage / 100)) /12;

    console.log(totalSum);

    //сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12
}

depositCalculator(["2350","6 ","7 "])