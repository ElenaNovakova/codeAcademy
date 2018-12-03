var cats = ["Tabby", "Lizzie", "Marie"];

function feedCats() {
    
    for (let i = 0; i <= 7; i++) {
        checkCat();        
    }
 
}

feedCats();

function checkCat() {
    for (let i = 0; i < cats.length; i++) {
        var cat = i;
        if (cat == 0 ){
            console.log(cats[i] + "start eating fish");
        } else if (cat == 1) {
            console.log(cats[i] + "start eating chicken");
        } else if (cat == 2){
            console.log(cats[i] + "start eating whatever");
        }
        
    }
}