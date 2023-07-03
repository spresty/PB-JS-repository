function cake(input) {

    let i = 0;
    let length = Number(input[i]);
    i++
    let width = Number(input[i]);
    i++
    let cakeSize = length * width;
    let pieces = 0;

    let command = input[i];

    while (command !== "STOP") {
        let cakeParts = Number(command);
        pieces += cakeParts;

        if (pieces > cakeSize) {
            console.log(`No more cake left! You need ${pieces - cakeSize} pieces more.`);
            break;
        }
        i++
        command = input[i];
    }

    if (command === "STOP" && pieces <= cakeSize) {
        console.log(`${cakeSize - pieces} pieces are left.`);
    }
}
cake(["10", "10", "20", "20", "20", "20", "21"])

