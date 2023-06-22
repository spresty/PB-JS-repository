function basketballEquipment(input){

    let annualFee = Number(input[0]);

    let basketballShoes = annualFee * 0.60;
    let jersey = basketballShoes * 0.80;
    let ball = jersey / 4;
    let accessories = ball / 5;

    let total = annualFee + basketballShoes + jersey + ball + accessories;
    console.log(total);
}


basketballEquipment(["365 "])