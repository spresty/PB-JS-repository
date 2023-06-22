function sumSeconds(input) {
  let timeFirst = Number(input[0]);
  let timeSecond = Number(input[1]);
  let timeThird = Number(input[2]);

  let totalTime = timeFirst + timeSecond + timeThird;

  let totalMinutes = Math.floor(totalTime / 60);
  let totalSeconds = totalTime % 60;

  if (totalSeconds < 10) {
    console.log(`${totalMinutes}:0${totalSeconds}`);
  } else {
    console.log(`${totalMinutes}:${totalSeconds}`);
  }
}
sumSeconds(["35", "45", "440"]);
