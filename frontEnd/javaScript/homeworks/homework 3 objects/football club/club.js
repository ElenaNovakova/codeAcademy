// start so 22 players

// sekoj 8 dena major football star come, go brkas najslabiot igrac

function Club() {
    this.players = [];

    this.player = function (){
        for (let i = 1; i <= 22; i++) {
            this.players.push(i);  
            
            //niza od 22 igraci, treba da bidat objects za da im dodademe vrednost na golovi;
        }
    }

    this.player();

    console.log(this.players);
    
    //posle sekoja utakmica dobivame nov redosled na igracite

    // na sekoi 8 dena go brkame igracot so najmalku golovi i dodavame nov igrac



}

Club();