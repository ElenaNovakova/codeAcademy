function taxCalc(salary, typeOfworker) {
    if(typeOfworker = "craftsman") {
        if (salary > 1000){
            return 1000 * 0.05 + (salary-1000) * 0.1;
        } else {
            return salary * 0.05;
        }
    } else {
        if (salary > 1000){
            return 1000 * 0.11 + (salary-1000) * 0.18;
        } else {
            return salary * 0.11;
        }
    }
}