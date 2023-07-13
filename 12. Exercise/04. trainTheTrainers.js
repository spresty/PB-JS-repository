function trainTheTrainers(input) {

    let judges = Number(input[0]);
    let index = 1;
    let currentInput = input[index];
    let sumGrades = 0;
    let counter = 0;

    while (currentInput !== "Finish") {
        counter++
        let name = currentInput;
        let tempSumGrade = 0;

        for (let i = 1; i <= judges; i++) {
            index++
            let currentGrade = Number(input[index]);
            tempSumGrade += currentGrade;
        }

        let tempAvgGrade = tempSumGrade / judges;
        sumGrades += tempAvgGrade;
        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);

        index++
        currentInput = input[index];
    }

    let finalAvgGrade = sumGrades / counter;
    console.log(`Student's final assessment is ${finalAvgGrade.toFixed(2)}.`);

}
trainTheTrainers(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])



