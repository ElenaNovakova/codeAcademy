function Bear() {
    this.liveDays = function (day) {
        console.log(day + ". This is  " + day + " day for the Bear");

        this.catchAnimal();
        this.hunterAttack(day);
        this.bearSurvive(day);
    }

    this.startMass = getRandom(70, 120);
    console.log("Strating Bear's mass is " + this.startMass);

    this.catchAnimal = function () {
        if (getChance(30)) {
            var animal = new Animal();
            console.log(animal);
            console.log("Bear catch " + animal.name);

            if (animal.name === "wolf") {
                this.startMass = this.startMass + animal.nutrion / 2 - Math.floor(this.startMass * 0.1);
            } else {
                this.startMass += Math.floor(animal.nutrion / 3);
            }

        } else {
            console.log("Bad day, bear don't catch animal");

            this.startMass -= Math.floor(this.startMass * 0.05)
        }
        console.log("Curent mass is " + this.startMass);
        return this.startMass;
    };

    this.randoAttack = getRandom(50,100);

    this.hunterAttack = function (day) {
        if (day > 20) {
            if (getChance(50)) {
                console.log("hunter ATTACK " + day);
                this.startMass -= Math.floor(this.startMass * 0.3)

                if (this.startMass > this.randoAttack) {
                    console.log("hunter kill bear on the day " + day);
                    return this.bearSurviveHunter= false;
                } else {
                    console.log("Bear runs the hunter " + day);
                }
            } else {
                console.log("hunter DON'T attack " + day);
       
            }
        }

        return this.bearSurviveHunter = true;
    };

    this.maxMass = getRandom(150, 200); //X
    console.log("Max mass the bear can weigh is " + this.maxMass);
   
    this.bearSurvive = function (day) {
        if (this.startMass > this.maxMass)  {
            console.log("$ Bear dies on the because of over weight on the day " + day);
            return this.bearSurviveMass = false;
        } else {
            console.log("$ Bear survive the day ");
        }
        return this.bearSurviveMass = true;

    }
    

}