function timePlusMinutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let minutesPlus15 = minutes + 15;

    if(minutesPlus15 > 59){
        hours += 1;
        minutesPlus15 -= 60;
    }

    if(hours === 24){
        hours = 0;
    }

    if(minutesPlus15 < 10){
        console.log(`${hours}:0${minutesPlus15}`);
    } else {
        console.log(`${hours}:${minutesPlus15}`);
    }
   
}
timePlusMinutes(["23","59"])