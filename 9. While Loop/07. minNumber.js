function minNumber(input) {
    let i = 0;
    let command = input[i];
    i++

    let minNum = Number.MAX_SAFE_INTEGER

    while (command !== "Stop"){
        let num = Number(command);

        if(minNum > num){
            minNum = num
        }
        command = input[i];
        i++
    }
    console.log(minNum);
    
    
}
minNumber(["-10", "20", "-30", "Stop"])