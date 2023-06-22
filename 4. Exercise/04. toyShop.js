function toyShop(input) {
  let tripPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollCount = Number(input[2]);
  let teddyBearCount = Number(input[3]);
  let minionCount = Number(input[4]);
  let truckCount = Number(input[5]);

  let puzzleTotal = puzzleCount * 2.6;
  let dollsTotal = dollCount * 3;
  let teddyBearTotal = teddyBearCount * 4.1;
  let minionTotal = minionCount * 8.2;
  let truckTotal = truckCount * 2;

  let totalMoney =
    puzzleTotal + dollsTotal + teddyBearTotal + 
    minionTotal + truckTotal;

  let totalProductCount =
    puzzleCount + dollCount + teddyBearCount + 
    minionCount + truckCount;

    if(totalProductCount >= 50){
        totalMoney *= 0.75;

    }
    
    let totalMoneyAfterRent = totalMoney * 0.9;

    if(totalMoneyAfterRent >= tripPrice){
        console.log(`Yes! ${(totalMoneyAfterRent - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - totalMoneyAfterRent).toFixed(2)} lv needed.`);
    }

}
toyShop(["320", "8", "2", "5", "5", "1"])
