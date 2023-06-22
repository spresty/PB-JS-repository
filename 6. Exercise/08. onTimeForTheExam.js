function onTimeForThourseExam(input) {
    let hoursoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hoursoursArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExam = hoursoursExam * 60 + minExam;
    let timeArrive = hoursoursArrive * 60 + minArrive;

    let diff = Math.abs(timeArrive - timeExam)
    let hours = Math.floor(diff / 60);
    let min = diff % 60;

    if (timeExam < timeArrive) {
        console.log('Late');

        if (diff < 60) {
            console.log(`${min} minutes after the start`);
        } else {

            if (min < 10) {
                console.log(`${hours}:0${min} hours after the start`);
            } else {
                console.log(`${hours}:${min} hours after the start`);
            }
        }
    } else if (timeArrive <= timeExam && (timeExam - timeArrive) <= 30) {
        console.log('On time');
        if (diff > 0) {
            console.log(`${min} minutes before the start`);
        }
    } else {
        console.log('Early');
        if (diff < 60) {
            console.log(`${min} minutes before the start`);
        } else {
            if (min < 10) {
                console.log(`${hours}:0${min} hours before the start`);
            } else {
                console.log(`${hours}:${min} hours before the start`);
            }

        }
    }
}
onTimeForThourseExam(["9", "00", "10", "30"])