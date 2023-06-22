function repainting(input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonCost = (nylon + 2) * 1.5;
    let paintCost = (paint * 1.1) * 14.5;
    let thinnerCost = thinner * 5;

    let costForMaterials = nylonCost + paintCost + thinnerCost + 0.40;
    let laborCost = (costForMaterials * 0.3) * hours;

    let totalCost = laborCost + costForMaterials
    console.log(totalCost);
}

repainting(["5 ","10 ","10 ","1 "])