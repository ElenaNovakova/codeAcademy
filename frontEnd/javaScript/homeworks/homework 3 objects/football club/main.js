function footbalClub() {
    var club = new Club();
    console.log(club); 

    var toPrint = club.allToPrint();
    console.log("******Hiligans make demage " + toPrint[0]);       
    console.log("******The fanshoop has sold " + toPrint[1] + " yerseys" );
    console.log("******For 30 days the stadium have " + toPrint[2] + " viewers");
    console.log("******The club has earnin " + toPrint[3]);
    console.log("******Total budget on the club is " + toPrint[4]); 
}

footbalClub();