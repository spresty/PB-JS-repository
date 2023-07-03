function moving(input) {

    let i = 0;
    let width = Number(input[i]);
    i++
    let length = Number(input[i]);
    i++
    let height = Number(input[i]);
    i++

    let freeSpace = width * length * height;
    let command = input[i];

    while (command !== "Done") {
        let boxesCount = Number(command);
        freeSpace -= boxesCount;
        
        if (freeSpace < 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        i++
        command = input[i];
    }

    if (freeSpace >= 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"])


