function tradeCommissions(input) {

    let town = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    if (sales >= 0 && sales <= 500) {
        switch (town) {
            case "Sofia": commission += 0.050; break;
            case "Varna": commission += 0.045; break;
            case "Plovdiv": commission += 0.055; break;
        }
    } else if (sales > 500 && sales <= 1000) {
        switch (town) {
            case "Sofia": commission += 0.070; break;
            case "Varna": commission += 0.075; break;
            case "Plovdiv": commission += 0.080; break;
        }
    } else if (sales > 1000 && sales <= 10000) {
        switch (town) {
            case "Sofia": commission += 0.080; break;
            case "Varna": commission += 0.100; break;
            case "Plovdiv": commission += 0.120; break;
        }
    } else if (sales > 10000) {
        switch (town) {
            case "Sofia": commission += 0.120; break;
            case "Varna": commission += 0.130; break;
            case "Plovdiv": commission += 0.145; break;
        }
    }

    let totalCommission = commission * sales;

    if (commission !== 0) {
        console.log(totalCommission.toFixed(2));
    } else {
        console.log("error");
    }
}

tradeCommissions(["Sofia", "1500"])