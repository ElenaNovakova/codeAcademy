function armstrong(){
for (let i = 100; i < 1000; i++) {
    var broj = i;
    var sum = 0;
    while (broj) {
        sum += Math.pow((broj % 10), 3);
        broj = Math.floor(broj / 10);
    }

    if (sum == i){
        console.log("Brojot " + sum + " e armstrong broj");
        
    }
   
}
}

armstrong();








    