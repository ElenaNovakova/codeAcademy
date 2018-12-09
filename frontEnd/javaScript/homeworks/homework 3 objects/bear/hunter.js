function Hunter() {
    this.hunterAttack = function () {
        if (getChance(5)) {
            return true;
        } else {
            return false;
        }
    }
}