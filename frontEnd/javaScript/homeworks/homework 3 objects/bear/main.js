function coutDays() {
    var forest = new Forest();
    for (let i = 1; i <= 30; i++) {
        forest.oneDayInTheFores(i);
        forest.hunterVSBEar(i); 
        if (forest.bearSurviveMass && forest.bearSurviveHunter) {
            continue;
        } else {
            break;         
        }    
    }    
}

coutDays();
