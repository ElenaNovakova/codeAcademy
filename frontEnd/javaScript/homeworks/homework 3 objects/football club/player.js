function Player(name) {
    this.name = "Name " + name;
    this.isAStar = false;
    this.scoreGoal = false;
    this.scoredGoals = 0;
}

function SuperStar() {
    this.isAStar = true;
}

SuperStar.prototype = new Player();