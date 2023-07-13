function specialNumbers(input) {

    let specialNumber = Number(input[0]);
    let result = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    let isSpecial = specialNumber % i === 0 &&
                        specialNumber % j === 0 &&
                        specialNumber % k === 0 &&
                        specialNumber % l === 0;

                    if (isSpecial) {
                        result += `${i}${j}${k}${l} `

                    }
                }
            }
        }
    }
    console.log(result);

} 

specialNumbers(["3"])