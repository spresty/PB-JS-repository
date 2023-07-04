function clock2() {

    for (let hours = 0; hours < 24; hours++) {
        for (let min = 0; min < 60; min++) {

            if (min >= 10 && hours < 10) {
                console.log(`0${hours}:${min}`);
            } else if (min >= 10 && hours >= 10) {
                console.log(`${hours}:${min}`);
            } else if (min < 10 && hours >= 10) {
                console.log(`${hours}:0${min}`);
            } else if (min < 10 && hours < 10) {
                console.log(`0${hours}:0${min}`);
            }
        }
    }
}
clock2()