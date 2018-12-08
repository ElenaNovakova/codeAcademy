function Race() {

    // da se podobri: da menuva razlicen tip na gumi i moze podobro da gi pecati vreminjata

    this.kilometars = 0;
    this.reacers = [];
    this.generateRacecars = function () {
        for (let i = 1; i <= 20; i++) {
            var reacer = new Racecar(i);
            this.reacers.push(reacer);
        }
    }

    this.countLaps = function () {
        var lap = new Lap();
        for (let i = 1; i <= 80; i++) {
            console.log("This is lap " + i);
            
            this.kilometars = lap.length * i;
            for (let j = 0; j < this.reacers.length; j++) {
                this.reacers[j].time = this.kilometars / this.reacers[j].speed;
                this.reacers[j].fuel -= 75 / 100 * i;

                console.log(this.reacers[j].time);
                
                this.goToPitstop();

                this.reacers.sort(function (a, b) {
                    var sort = a.time - b.time;
                    return a.time - b.time;
                });
            }
        }
        console.log("The Winner is " + this.reacers[0].name);
    }

    this.demageTire = function () {
        for (let i = 1; i <= 80; i++) {
            for (let j = 0; j < this.reacers.length; j++) {
                if (this.kilometars > 300) {
                    this.reacers[j].tireHealth = "demaged";
                }
            }
        }
    }

    this.goToPitstop = function () {
        var pitstop = new Pitstop();
        for (let j = 0; j < this.reacers.length; j++) {
            if (this.reacers[j].fuel < 20) {
                this.reacers[j].fuel += pitstop.addFuel(this.reacers[j].fuel);

                if (this.reacers[j].tireHealth == "demaged") {
                    this.reacers[j].tireHealth = pitstop.tireChange(this.reacers[j].tireHealth)
                }
            }
        }
    }

    this.crashCar = function () {
        for (let i = 1; i < this.reacers.length + 1; i++) {
            if (getChance(5)) {
                console.log("racercar " + i + " crash");
                this.reacers[i].time = 0;
            };
        };
    };

    this.generateRacecars();
    this.countLaps();
    this.demageTire();
    this.crashCar();
   
}