// Write a function that accepts two numbers N and X. Find the closest number bigger than N that is TOTALLY DIFFERENT than the number X. A number is TOTALLY DIFFERENT from another if every digit in the first number is different than every digit of the second number. You are not permitted to use arrays or matrices (we haven’t learned them yet). It’s ok to write subprocedures (helper functions that get called in your main function).

function totalyDifferent(N, X) {
    var closser = N + 1;
    while (true) {
        if (check(closser, X)) {
            break;
        } else {
            closser++;
        }
    }
    return console.log("The closest number bigger than " + N + " that is TOTALY DIFFERENT than number " + X + " is number " + closser); 
}

 totalyDifferent(254, 203);

function check(number1, number2) {
    var helper;
    while (number1 && number2) {
        var digit1 = number1 % 10;
        number1 = Math.floor(number1 / 10);

        var digit2 = number2 % 10;
        number2 = Math.floor(number2 / 10);
   
        if (digit1 === digit2) {
            helper = false;
            break;
        } else {
            helper = true;   
        }  
    }
    return helper; 
}


