function lunchBreak(input) {
    let seriesName = input[0];
    let seriesLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchBreak = breakLength / 8;
    let relaxTime = breakLength / 4;
    let totalTimeLeft = breakLength - lunchBreak - relaxTime;

    if (totalTimeLeft >= seriesLength) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(totalTimeLeft - seriesLength)} minutes free time.`);

    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(seriesLength - totalTimeLeft)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",

"48",

"60"])