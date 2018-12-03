function Game() {
    // igraat 22 igraci, imaat 30% da dadat gol, golot go dava eden od tie igraci

    this.goalOrNot = function () {
        this.chance = getRandom(1, 100);
        if (chance < 30) {
            console.log("GOALLLL");
            return true;
        } else {
            console.log("UUUUU");
            
            return false;
        }
    }

    this.goalOrNot();

    //posle utakmicata gi redi igracite po najmnogu golovi dadeni
}

Game();