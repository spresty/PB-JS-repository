function examPreparation(input) {
    let i = 0;
    let allowedNegativeGrades = Number(input[i]);
    i++

    let command = input[i];
    i++

    let badGradeCounter = 0;
    let gradeSum = 0;
    let countProblems = 0;
    let taskName = ""
    let needBreak = false;

    while (command !== "Enough") {
        taskName = command;
        let currentGrade = Number(input[i]);
        i++
        countProblems++
        gradeSum += currentGrade;

        if (currentGrade <= 4.00) {
            badGradeCounter++
            if (badGradeCounter >= allowedNegativeGrades) {
                needBreak = true;
                break;
            }
        }

        command = input[i];
        i++
    }

    let avgGrade = gradeSum / countProblems;
    if (needBreak) {
        console.log(`You need a break, ${badGradeCounter} poor grades.`);
    } else {
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${taskName}`);
    }
}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])

