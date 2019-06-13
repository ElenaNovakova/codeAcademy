function Forest() {
    var bear = new Bear();
    var animal = new Animal();
    var hunter = new Hunter();
    this.bearSurviveHunter = true;

    this.oneDayInTheFores = function (day) {

        let newDiv = document.createElement('div');
        newDiv.innerHTML = "The " + day + " day begin";
        document.getElementById('content').appendChild(newDiv)

        // console.log("The " + day + " day begin");
        this.catchAnimal();
        this.bearSurvive(day);
    };

    this.catchAnimal = function () {
        if (getChance(30)) {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = "Bear catch " + animal.name;
            document.getElementById('content').appendChild(newDiv)

            // console.log("Bear catch " + animal.name);

            if (animal.name === "wolf") {
                bear.startMass = bear.startMass + animal.nutrion / 2 - Math.floor(bear.startMass * 0.1);
            } else {
                bear.startMass += Math.floor(animal.nutrion / 3);
            }

        } else {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = "Bad day, bear don't catch animal";
            document.getElementById('content').appendChild(newDiv)

            // console.log("Bad day, bear don't catch animal");

            bear.startMass -= Math.floor(bear.startMass * 0.05)
        }
        let newDiv = document.createElement('div');
        newDiv.innerHTML = "Current mass is " + bear.startMass;
        document.getElementById('content').appendChild(newDiv)

        // console.log("Curent mass is " + bear.startMass);
        return bear.startMass;
    };

    this.hunterVSBEar = function (day) {
        if (day > 20) {
            if (hunter.hunterAttack()) {
                bear.startMass -= Math.floor(bear.startMass * 0.3);
                if (bear.startMass > bear.randomAttack) {
                    let newDiv = document.createElement('div');
                    newDiv.innerHTML = "hunter kill bear on the day " + day;
                    document.getElementById('content').appendChild(newDiv)

                    console.log("hunter kill bear on the day " + day);
                    return this.bearSurviveHunter = false;
                } else {

                    let newDiv = document.createElement('div');
                    newDiv.innerHTML = "Bear runs the hunter ";
                    document.getElementById('content').appendChild(newDiv)

                    // console.log("Bear runs the hunter ");
                    return this.bearSurviveHunter = true;
                }
            }
        }
    }

    this.bearSurviveMass = true;
    this.bearSurvive = function (day) {
        if (bear.startMass > bear.maxMass) {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = "$ Bear dies on the because of over weight on the day " + day;
            document.getElementById('content').appendChild(newDiv)

            // console.log("$ Bear dies on the because of over weight on the day " + day);
            return this.bearSurviveMass = false;
        } else {
            return this.bearSurviveMass = true;
        }
    }

}