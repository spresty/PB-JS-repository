function vacation(input) {
    let i = 0;
    let neededMoney = Number(input[i]);
    i++
    let availableMoney = Number(input[i]);
    i++
    let spendDays = 0;
    let days = 0;

    let currentInput = input[i];

    while (availableMoney < neededMoney) {
        days++;
        i++

        if (currentInput === "spend") {
            spendDays++
            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(days);
                break;
            }
            let moneyToSpend = Number(input[i]);
            availableMoney -= moneyToSpend

            if (availableMoney < 0) {
                availableMoney = 0;
            }

        } else if (currentInput === "save") {
            spendDays = 0;
            let moneyToSave = Number(input[i]);
            availableMoney += moneyToSave;
        }
        i++
        currentInput = input[i];
    }

    if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${days} days.`);
    }

} 

vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])

