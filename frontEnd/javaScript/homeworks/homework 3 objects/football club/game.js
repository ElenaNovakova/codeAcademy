function Game() {
    this.goalOrNot = function () {
        var chance = getRandom(1, 100);
        if (chance < 30) {
            return true;
        } else {
            return false;
        }
    }
    this.goalOrNot();
}
