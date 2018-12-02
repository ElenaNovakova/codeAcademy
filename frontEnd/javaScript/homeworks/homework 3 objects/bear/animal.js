function Animal() {
    this.randomAnimal = getRandom(1, 10);
    this.getAnimal = function () {
        if (this.randomAnimal === 1) {
            this.name = "wolf";
            this.nutrion = 100;
        } else if (this.randomAnimal === 2) {
            this.name = "marmots";
            this.nutrion = 90;
        } else if (this.randomAnimal === 3) {
            this.name = "moose";
            this.nutrion = 80;
        } else if (this.randomAnimal === 4) {
            this.name = "deer";
            this.nutrion = 70;
        } else if (this.randomAnimal === 5) {
            this.name = "caribou";
            this.nutrion = 60;
        } else if (this.randomAnimal === 6) {
            this.name = "bison";
            this.nutrion = 50;
        } else if (this.randomAnimal === 7) {
            this.name = "ground squirrels";
            this.nutrion = 40;
        } else if (this.randomAnimal === 8) {
            this.name = "elk";
            this.nutrion = 30;
        } else if (this.randomAnimal === 9) {
            this.name = "mice";
            this.nutrion = 20;
        } else if (this.randomAnimal === 10) {
            this.name = " fish";
            this.nutrion = 10;
        }
    }

    this.getAnimal();

}