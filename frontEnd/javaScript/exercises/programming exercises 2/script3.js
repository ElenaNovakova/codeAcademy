// A car uses 7 litres of fuel on 100km. How much fuel will the car spend driving 43 kilometers? Use a loop instead of a mathematical formula.

function fuelCalc(kilometars) {
    var fuel = 0;
    for (let i = 0; i <= kilometars; i++) {
        fuel += (7 / 100);   
    }
    console.log(fuel);
}

fuelCalc(43);