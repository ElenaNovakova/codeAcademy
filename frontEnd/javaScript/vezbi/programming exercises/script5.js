var sum = 0;

function sumAllButPrime(x, y) {
    for (let i = x; i <= y; i++) {
        if (i === 1) {
            console.log("Brojot 1 ne e nitu prost, nitu slozen");

        } else {
            function isPrime(number) {
                var number = i;
                for (let j = 2; j < number; j++) {
                    if (number % j === 0) {
                        var neProst = number;                        
                    } 
                    console.log(neProst);
                }
                
                console.log("brojot " + prost + " e prost");
            }
            isPrime();
        }
    }
    console.log("Zbirot na site broevi, koi ne se prosti, od " + x + " do " + y + " e ednakov na " + sum);
}