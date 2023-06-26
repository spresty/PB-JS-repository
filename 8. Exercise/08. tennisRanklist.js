function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let wins = 0;
    let totalPoints = startingPoints;

    for (let i = 2; i < input.length; i++){
        let stage = input[i];

        switch (stage){
            case "W" :
                totalPoints += 2000;
                wins++
                break; 
            case "F" :
                totalPoints += 1200;
                break; 
            case "SF" : 
                totalPoints += 720;
                break; 
        }
    }

    let avgPoints = (totalPoints - startingPoints) / tournaments;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${((wins / tournaments) * 100).toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])