function footbalClub() {
    var club = new Club();
    console.log(club); 
    console.log("******Hiligans make demage " + club.allToPrint[0]);       
    console.log("******The fanshoop has sold " + club.allToPrint[1] + " yerseys" );
    console.log("******For 30 days the stadium have " + club.allToPrint[2] + " viewers");
    console.log("******The club has earnin " + club.allToPrint[3]);
    console.log("******Total budget on the club is " + club.allToPrint[4]); 
}

footbalClub();