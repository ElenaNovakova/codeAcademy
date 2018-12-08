function Forest() {
    var bear = new Bear();
    var animal = new Animal();

    this.oneDayInTheFores = function (day) {
        console.log("The " + day + " day begin");
        this.catchAnimal();
        this.bearSurvive(day);
    };

    this.catchAnimal = function () {
        if (getChance(30)) {
            console.log("Bear catch " + animal.name);

            if (animal.name === "wolf") {
                bear.startMass = bear.startMass + animal.nutrion / 2 - Math.floor(bear.startMass * 0.1);
            } else {
                bear.startMass += Math.floor(animal.nutrion / 3);
            }

        } else {
            console.log("Bad day, bear don't catch animal");

            bear.startMass -= Math.floor(bear.startMass * 0.05)
        }
        console.log("Curent mass is " + bear.startMass);
        return bear.startMass;
    };

    this.bearSurviveMass = true;
    this.bearSurvive = function (day) {
        if (bear.startMass > bear.maxMass)  {
            console.log("$ Bear dies on the because of over weight on the day " + day);
            return this.bearSurviveMass = false;
        } else {
            return this.bearSurviveMass = true;
        }
        

    }
    
    
}

