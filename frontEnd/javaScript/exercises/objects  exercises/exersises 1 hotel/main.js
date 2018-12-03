function startWeek() {
    var hilton = new LuxuryHotel();
    for (let i = 0; i < 14; i++) {
        hilton.workDay(i);
    }
}

startWeek();