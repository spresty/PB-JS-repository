function equalSumsEvenOddPosition(input) {
    
    let smallNumber = Number(input[0]);
    let bigNumber = Number(input[1]);
    let output = "";

    for (let row = smallNumber; row <= bigNumber; row++) {
        let currentNumAsString = `${row}`;
        let evenNumbersSum = 0;
        let oddNumbersSum = 0;

        for (let col = 0; col < currentNumAsString.length; col++) {
            let currentNumber = Number(currentNumAsString[col])

            if (col % 2 === 0) {
                evenNumbersSum += currentNumber
            } else {
                oddNumbersSum += currentNumber
            }
        }
        if (evenNumbersSum === oddNumbersSum) {
            output += currentNumAsString + " ";
        }
    }

    if (output !== "") {
        console.log(output);
    }
}
equalSumsEvenOddPosition(["123456", "124000"])