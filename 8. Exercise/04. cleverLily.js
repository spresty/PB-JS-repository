function cleverLily(input) {

    let LilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let dollPrice = Number(input[2]);

    let dollCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= LilisAge; currentAge++) {

        if (currentAge % 2 == 0) {
            stolenMoney++
            savedMoney += addMoney;
            addMoney += 10;
        } else {
            dollCounter++
        }
    }
    
    let dollMoney = dollCounter * dollPrice;
    let totalMoney = (dollMoney + savedMoney) - stolenMoney;

    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
    }
}
cleverLily(["21","1570.98","3"])