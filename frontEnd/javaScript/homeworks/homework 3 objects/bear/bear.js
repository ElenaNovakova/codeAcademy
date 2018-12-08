function Bear() {
   
    this.maxMass = getRandom(150, 200); //X
    this.startMass = getRandom(70, 120);



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

   
    
   


}