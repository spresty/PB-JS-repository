function walking(input) {
    let i = 0;
    let currentInput = input[i];
    let totalSteps = 0;
    let targetSteps = 10000

    while (currentInput !== "Going home") {
        let currentSteps = Number(currentInput)
        totalSteps += currentSteps

        if (totalSteps >= targetSteps) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - targetSteps} steps over the goal!`);
            break;
        }
        i++
        currentInput = input[i];
    }

    if (currentInput === "Going home") {
        i++
        let stepsGoingHome = Number(input[i]);
        totalSteps += stepsGoingHome
        if (totalSteps < targetSteps) {
            console.log(`${targetSteps - totalSteps} more steps to reach goal.`);
        } else if (totalSteps >= targetSteps) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - targetSteps} steps over the goal!`);
        }
    }
}
walking(["125", "250", "4000", "30", "2678", "4682"])



