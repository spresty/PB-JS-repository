function graduation(input) {
    let i = 0;
    let name = input[i];
    i++

    let currentClass = 1;
    let gradeSum = 0;
    let badGradeCount = 0;
    let hasExcluded = false

    while (currentClass <= 12) {
        let grade = Number(input[i])
        i++
        if (grade < 4) {
            badGradeCount++
            if (badGradeCount >= 2) {
                console.log(`${name} has been excluded at ${currentClass} grade`);
                hasExcluded = true
                break;
            }

            continue;
        }
        gradeSum += grade;
        currentClass++
    }

    let avgGrade = gradeSum / 12;

    if (!hasExcluded) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }

}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])