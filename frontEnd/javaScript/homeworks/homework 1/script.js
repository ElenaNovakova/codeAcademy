function maxOfThree (number1, number2, number3) {
    var max;
    if (number1 >= number2){
        if (number1 >= number3) {
            var max = number1;
        } else {
            var max = number3;
        } 
    } else if (number2 >= number1){
        if (number2 >= number3) {
            var max = number2;
        } else {
            var max = number3;
        } 
    }
    return max
}