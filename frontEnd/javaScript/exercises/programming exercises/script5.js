function sumAllButPrime(x, y) {
    var sum = 0;
    for (let i = x; i <= y; i++) {
        var number = i;
        if (number === 1) {
            console.log("Brojot 1 ne e nitu prost, nitu slozen");

        } else {
            if (isPrime(number)) {
                console.log(number + " e prost");  
            } else {
                sum =+ sum +number;  
            }  
        }
    }
    return "Zbirot na site broevi od " + x + " do " + y + " koi ne se prosti,e ednakov na " + sum;
}

function isPrime(number) {
    for (let j = 2; j < number; j++) {
        if (number % j === 0) {
            return false;                    
        } 
    }
    return true;
}
