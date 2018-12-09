function Club() {
    this.players = [];
    this.generatePlayer = function () {
        for (let i = 0; i < 22; i++) {
            var player = new Player(i)
            this.players.push(player);
        };
    };

    this.countDays = function () {
        for (let i = 1; i <= 30; i++) {
            console.log("This is the DAY " + i);
            this.calculateGoals();

            //VIEWERS
            var stadium = new Stadium();
            var viewers = stadium.fillViewers()
            console.log("Today the stadium have " + viewers + " viewers");

            var fanShoop = new FanShoop();
            this.soldYerseysDay = fanShoop.soldYerseys(viewers, this.percentage);

            console.log("On day " + i + " the fanshoop have sold " + this.soldYerseysDay + " yerseys");


            this.soldYerseysTotal = this.calculateAllSoldYerseys(this.soldYerseysDay);
            this.totalViewers = this.calculateTotalViewers(viewers);

            // HULIGANS
            this.huliganDemage(stadium.capacity, viewers);

            if (i % 8 === 0) {
                this.players.splice(1, 1);
                this.players.push(new SuperStar());
            }
        }

        this.calculateTotoalEarnings(this.soldYerseysTotal);

    }


    this.calculateGoals = function () {
        var game = new Game();
        if (game.goalOrNot()) {
            var playerWhoScore = getRandom(1, this.players.length);
            console.log(this.players[playerWhoScore].name + " score goal");
            this.players[playerWhoScore].scoreGoal = true;
            this.players[playerWhoScore].scoredGoals++;
            this.percentage = 25;
        } else {
            this.percentage = 10;
            console.log("Nobady score a goal.");
        }
        this.players.sort(function (a, b) {
            return a.scoredGoals - b.scoredGoals;
        });
    }

    this.calculateAllGoals = function () {
        var allGoals = 0;
        for (let i = 0; i < this.players.length; i++) {
            allGoals += this.players[i].scoredGoals;
        }
        return allGoals;
    }

    this.soldStart = 0;
    this.calculateAllSoldYerseys = function (sold) {
        return this.soldStart += sold;
    };

    this.totalStart = 0;
    this.calculateTotalViewers = function (total) {
        return this.totalStart += total;
    }

    this.demage = 0;
    this.totalDemage = 0;
    this.huliganDemage = function (capacity, viewers) {
        // ako brojkata e poveke od 75% popolnet stadionot da ima huligani koi ke se tepaat, 15% od prisutnite da se huligani i da predizvikaat steta od 10 po huligan
        if (capacity > 75) {
            this.demage = viewers * 0.15 * 10;
            this.totalDemage += this.demage;
            console.log("#######The huligans make demage " + this.demage);
        }
    }

    this.totalStartEarning = 0;
    this.calculateTotoalEarnings = function (yerseys) {
        this.totalStartEarning += yerseys * 10;
    };

    this.calculateBudget = function () {
        this.budget = this.totalStartEarning - this.totalDemage;
    };

    this.allToPrint = function () {
        return allToPrint = [this.totalDemage, this.soldYerseysTotal, this.totalViewers, this.totalStartEarning, this.budget]
    };

    this.generatePlayer();
    this.countDays();
    this.calculateBudget();
    this.allToPrint();
}
