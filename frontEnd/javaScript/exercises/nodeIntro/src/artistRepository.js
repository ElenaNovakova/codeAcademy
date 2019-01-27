var Artist = require("./artist.js")

var axios = require("axios")

module.exports = function ArtistRepository() {  
    this.getArtist = async function (artistName) {
        var result = null;
        try {
            var result = await axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" + artistName + "&api_key=55c0ed6bf84f27a34c4864e7466d733d&format=json");
            return new Artist(result.data.artist);
        } catch (error) {
            return result;
        }

    }

    this.getTopAlbumNames = async function (artistName) {
        var result = null;
        try {
            var result = await axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artistName + "&api_key=55c0ed6bf84f27a34c4864e7466d733d&format=json&limit=5");
            return result.data.topalbums.album.map(function(album){
                return album.name;
            });
        } catch (error) {
            return result;
        }
    }


    // this.searchArtist = async function (artistSearch) {
    //     var result = null;
    //     try {
    //         var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+ artistSearch + "&api_key=55c0ed6bf84f27a34c4864e7466d733d&format=json&limit=5");

    //         var result = await URL;
    //         console.log(result);

    //         return result.artist.name;
    //     } catch (error) {
    //         return result;
    //     }
    // }

}