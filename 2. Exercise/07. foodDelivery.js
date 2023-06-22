function foodDelivery(input){
    
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veggieMenuCount = Number(input[2]);

    let chickenCost = chickenMenuCount * 10.35;
    let fishCost = fishMenuCount * 12.40;
    let veggieCost = veggieMenuCount * 8.15;

    let dessertCost = (chickenCost + fishCost + veggieCost) * 0.20;

    let total = chickenCost + fishCost + veggieCost + dessertCost + 2.50;
    console.log(total);

}

foodDelivery(["9 ",

"2 ",

"6 "])