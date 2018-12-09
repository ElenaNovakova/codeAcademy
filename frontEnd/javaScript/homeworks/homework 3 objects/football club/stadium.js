function Stadium(){
    this.numberOfSeats = 60000;
    this.capacity = getRandom(60, 80);
    this.fillViewers = function () {      
        return this.numberOfSeats * this.capacity / 100;
    }

}