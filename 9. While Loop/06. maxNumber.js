function maxNumber(input) {
    let i = 0;
    let command = input[i];
    i++

    let maxNum = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (maxNum < num) {
            maxNum = num
        }
        command = input[i];
        i++
    }

    console.log(maxNum);
}
maxNumber(["-1", "-2", "Stop"])