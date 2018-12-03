// start so 22 players

// sekoj 8 dena major football star come, go brkas najslabiot igrac

function Club() {
    this.players = [];

    this.player = function (){
        for (let i = 1; i <= 22; i++) {
            this.players.push(i);         
        }
    }

    this.player();

    console.log(this.players);
    
    
}

Club();