function MusicPage(){
    this.generateArtist = function () {
        var newArtists = [];
        var artist = {
            method: "GET",
            success: function (data) {
                newArtists.push(new Artist());

                console.log(data);
            },
            error: function (error) {
                console.log("error", error);
            },

            url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=55c0ed6bf84f27a34c4864e7466d733d&format=json"
        }
        $.ajax(artist);

        
        
    }
    this.generateArtist();

    
};

MusicPage();
