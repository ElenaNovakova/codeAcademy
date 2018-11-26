var bhp = prompt("How much horsepower does a car have?")

if (bhp <= 85) {
    console.log("You should pay 3000 denars");
} else if (bhp <= 150) {
    console.log("You should pay 5000 denars");
} else {
    console.log("You should pay 15000 denars");
}