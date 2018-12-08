function Pitstop() {
    // nadopolni gorivo i smeni gumi
    this.addFuel = function (fuel) {
        fuel = fuel + 100;
        return fuel;
    }

    this.tireChange = function (tire) {
        tire = "new tire"
        return tire;
    }
}