function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let finalnum = 0;

    switch (operator) {
        case "+":
            finalnum = n1 + n2;
            if (finalnum % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${finalnum} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${finalnum} - odd`);
            }
            break;
        case "-":
            finalnum = n1 - n2;
            if (finalnum % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${finalnum} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${finalnum} - odd`);
            }
            break;
        case "*":
            finalnum = n1 * n2;
            if (finalnum % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${finalnum} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${finalnum} - odd`);
            }
            break;
        case "/":
            finalnum = n1 / n2
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${(n1 / n2).toFixed(2)}`);
            }
            break
        case "%":
            finalnum = n1 % n2
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${(n1 % n2)}`);
            }
            break
    }
}
operationsBetweenNumbers(["10", "3", "%"])