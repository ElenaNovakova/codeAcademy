// An orc warrior is fighting a human footman. The battle ends when one of them dies. The orc has 720 hitpoints, does 23-35 damage and has 5 armor. The human footman has 550 hitpoints, does 18-27 damage, but has a shield that gives him 9 armor. Shields and armor deduct the damage that the fighter takes. Who will win the fight?

// var orcHitpoints = 720;
// var orcDamageMin = 23;
// var orcDamageMax = 35;
// var orcArmor = 5;

// var humanHitpoints = 550;
// var humanDamageMin = 18;
// var humanDamageMax = 27;
// var humanArmor = 9;


// function win() {
//     while (orcHitpoints >= 0 && humanHitpoints > 0) {  
//         fight();
//     }
    
//     if (orcHitpoints >= 0) {
//         return console.log("Orc win!");
//      } else if (humanHitpoints >= 0) {
//         return console.log("Human win!");
//      }
// }

// function fight() {
//     var orcDamage = funcOrcDamage(); 
//     var humanDamage = funcHumanDamage();

//     humanHitpoints = humanHitpoints - orcDamage + humanArmor;
//     orcHitpoints = orcHitpoints - humanDamage + orcArmor;
// }

// function funcOrcDamage() {
//     var orcDamage = (Math.floor(Math.random() * (+orcDamageMax - +orcDamageMin) + +orcDamageMin));
//     return orcDamage;
// }

// function funcHumanDamage() {
//     var humanDamage = (Math.floor(Math.random() * (+humanDamageMax - +humanDamageMin) + +humanDamageMin));
//     return humanDamage;
// }


// win();


// Object solution 

function Fighter(hitpoints, damageMin, damageMax, armor) {
    this.hitpoints = hitpoints;
    this.damageMin = damageMin;
    this.damageMax = damageMax;
    this.armor = armor;
    this.funcDamage = function () {
        return Math.floor(Math.random() * (+this.damageMax - +this.damageMin) + +this.damageMin);
        }
};

var orc = new Fighter(720, 23, 35, 5);

var human = new Fighter(550, 18, 27, 9);

function win() {
    while (orc.hitpoints >= 0 && human.hitpoints > 0) {  
        fight();
    }
    
    if (orc.hitpoints >= 0) {
        return console.log("Orc win!");
     } else if (human.hitpoints >= 0) {
        return console.log("Human win!");
     }
}

function fight() {
    var orcDamage = orc.funcDamage(); 
    var humanDamage = human.funcDamage();

    human.hitpoints = human.hitpoints - orcDamage + human.armor;
    orc.hitpoints = orc.hitpoints - humanDamage + orc.armor;
}

win();