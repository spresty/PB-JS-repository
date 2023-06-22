function petShop(input){
    
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);

    let dogFoodCost = dogFoodCount * 2.5;
    let catFoodCost = catFoodCount * 4.0;

    console.log(`${catFoodCost + dogFoodCost} lv.`);

}

petShop(["13", "9"])
