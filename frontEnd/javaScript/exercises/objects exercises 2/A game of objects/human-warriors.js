function Knight(name, health) {
    this.health = health;
    this.name = name;
    this.protectArmy = function() {

    }
}
Knight.prototype = new Combatant();

function Wizard(name, health) {
    this.health = health;
    this.name = name;
    this.buffAllies = function() {
        
    }
}
Wizard.prototype = new Combatant();

function Archer(name, health) {
    this.health = health;
    this.name = name;
    this.receiveDamage = function(type) {
        if (type === "melee") {
            return;
        } else {
            this.__proto__.receiveDamage();
        }
    }
}
Archer.prototype = new Combatant();
