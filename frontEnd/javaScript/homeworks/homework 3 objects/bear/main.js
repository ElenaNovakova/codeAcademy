
function coutDays() {
    var forest = new Forest();
    for (let i = 1; i <= 30; i++) {
        forest.oneDayInTheFores(i);
        if (forest.bearSurviveMass /*&& bear.bearSurviveHunter*/) {
            continue;
        } else {
            console.log("BEAR DIES ON THE " + i + " DAY");
            break;         
        }    
    }    
}

coutDays();
