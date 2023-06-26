function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let evaluators = Number(input[2]);

    let index2 = 4;

    for (let index = 3; index < input.length; index += 2) {
        let evaluatorName = input[index];
        let points = Number(input[index2])
        index2 += 2

        academyPoints += ((evaluatorName.length * points) / 2);

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }

    if (academyPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",

    "205",

    "4",

    "Johnny Depp",

    "45",

    "Will Smith",

    "29",

    "Jet Lee",

    "10",

    "Matthew Mcconaughey",

    "39"])