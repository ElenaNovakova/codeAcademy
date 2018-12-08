function Combatant() {
    this.attack = function(damage) {
        
    }
    this.receiveDamage = function() {
        console.log("someone received damage");
    }
}

Combatant.prototype = new Being();