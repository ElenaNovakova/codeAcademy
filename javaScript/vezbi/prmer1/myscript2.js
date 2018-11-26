

function calcPrice(numberOfPhones, priceOfPhone, type) {
    var rate = 0.05;
    var taxRate = 0.18;
    var price = numberOfPhones * priceOfPhone * rate * taxRate;
    if (type === "an"){

    var price = price -price * 0.02;

    console.log(price);
    } else if (type === "ios"){
        price = price -price * 0.05;
        console.log(price);
    }

}

calcPrice(30, 899.95, "ios");

// android 2%, ioes 5%
