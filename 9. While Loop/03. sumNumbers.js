function sumNumbers(input){
    let i = 0;
    let target = Number(input[i]);
    i++


    let sum = 0;

    while(sum < target){
        let currentNum = Number(input[i]);
        i++
        sum += currentNum;
    }
    console.log(sum);

}
sumNumbers(["20", "1", "2", "3", "4", "5", "6", "123"])