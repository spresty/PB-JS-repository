function trekkingMania(input) {

    let groupCount = Number(input[0]);
    let totalPeople = 0;

    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        let peopleCount = Number(input[i]);
        totalPeople += peopleCount;

        if (peopleCount <= 5) {
            musala += peopleCount
        } else if (peopleCount <= 12) {
            montblanc += peopleCount
        } else if (peopleCount <= 25) {
            kilimanjaro += peopleCount
        } else if (peopleCount <= 40) {
            k2 += peopleCount
        } else {
            everest += peopleCount
        }
    }

    console.log(((musala / totalPeople) * 100).toFixed(2) + "%");
    console.log(((montblanc / totalPeople) * 100).toFixed(2) + "%");
    console.log(((kilimanjaro / totalPeople) * 100).toFixed(2) + "%");
    console.log(((k2 / totalPeople) * 100).toFixed(2) + "%");
    console.log(((everest / totalPeople) * 100).toFixed(2) + "%");
}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])