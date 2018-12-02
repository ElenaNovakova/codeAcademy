
function coutDays() {
    var bear = new Bear();
    for (let i = 1; i <= 30; i++) {
        bear.liveDays(i);

        if (bear.bearSurviveMass && bear.bearSurviveHunter) {
            continue;
        } else {
            console.log("BEAR DIES ON THE " + i + " DAY");
            break;         
        }    
    }    
}

coutDays();
