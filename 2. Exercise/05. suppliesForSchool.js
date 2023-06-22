function suppliesForSchool(input){

    let penCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let boardCleaner = Number(input[2]);
    let discount = Number(input[3]);

    let totalSum = (penCount * 5.80) + (markerCount * 7.20) +  (boardCleaner * 1.20);

    let discountedTotalSum = totalSum - (totalSum * (discount / 100));
    console.log(discountedTotalSum);
}
suppliesForSchool(["4 ","2 ","5 ","13 "])
