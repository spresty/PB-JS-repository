function workingHours(input){
    let currentHour = Number(input[0]);
    let day = input[1];

    if (currentHour >= 10 && currentHour <= 18){
        if (day === "Sunday") {
            console.log("closed");
        } else{
            console.log("open");
        }
    } else {
        console.log("closed");
    }
}
workingHours(["11", "Sunday"])