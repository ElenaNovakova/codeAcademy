// Write a script to check whether a number is a palindrome or not. Input the number as a parameter.



var cifri = [];
var cifriPalindrom = [];
var obratenBroj;

function reverseNumber(number) {
    console.log(number);
    
    while (number) {
        cifra = number % 10;
        number = Math.floor(number / 10);
        cifri.push(cifra);
    }

    for (let i = cifri.length - 1; i >= 0; i--) {
        cifriPalindrom.push(cifri[i])
        
    }

    var obratenBroj = cifriPalindrom.join('');

    console.log(obratenBroj);
    
    return obratenBroj;
    
}

function palindrome() {
    var number = prompt("Vnesi broj");
    var obratenBroj = reverseNumber(number);

    if (number === obratenBroj) {
        console.log("Brojot " + number + " e palindrom");
                
    } else {
        console.log("Brojot " + number + "ne e palindrom");
        
    }
    
}

palindrome();