// An orc warrior is fighting a human footman. The battle ends when one of them dies. The orc has 720 hitpoints, does 23-35 damage and has 5 armor. The human footman has 550 hitpoints, does 18-27 damage, but has a shield that gives him 9 armor. Shields and armor deduct the damage that the fighter takes. Who will win the fight?

var orcHitpoints = 720;
var orcDamageMin = 23;
var orcDamageMax = 35;
var orcArmor = 5;

var humanHitpoints = 550;
var humanDamageMin = 18;
var humanDamageMax = 27;
var humanArmor = 9;

function win() {
    while (orcHitpoints <= 0 || humanHitpoints <= 0){
        fight();
    }
    if (orcHitpoints === 0) {
        console.log("Orc win!");
    } else {
        console.log("Human win!");
    }

}

function fight() {
    humanHitpoints = humanHitpoints - orcDamageMax + humanArmor;
    orcHitpoints = orcHitpoints - humanDamageMax + orcArmor;
}

win();

