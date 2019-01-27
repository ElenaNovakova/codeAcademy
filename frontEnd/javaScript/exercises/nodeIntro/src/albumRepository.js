var Album = require("./album.js");
var axios = require("axios")

module.exports = function AlbumRepository(){
    this.getAlbum = async function(artistName, albums) {
        var result = [];
        try {
            for (let i = 0; i < albums.length; i++) {
                const album = albums[i];
                var response = await axios.get("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=" + artistName + "&album=" + album + "&api_key=55c0ed6bf84f27a34c4864e7466d733d&format=json");
                result.push(new Album(response.data.album))
            }

            return result;

        } catch (error) {
            return result;
        }
    }

   
}