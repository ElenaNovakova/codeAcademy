import { Artist } from "/entities/artist.js";


export function ArtistRepository() {
    this.getArtist = async function (artistName) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" + artistName + "&api_key=55c0ed6bf84f27a34c4864e7466d733d&format=json");
            var result = await response.json();
            return new Artist(result.artist);
        } catch (error) {
            return result;
        }
    }

    this.getTopAlbumNames = async function (artistName) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artistName + "&api_key=55c0ed6bf84f27a34c4864e7466d733d&format=json&limit=5");
            var result = await response.json();
            return result.topalbums.album.map(function(album){
                return album.name;
            });
        } catch (error) {
            return result;
        }
    }

    
    this.searchArtist = async function (artistSearch) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+ artistSearch + "&api_key=55c0ed6bf84f27a34c4864e7466d733d&format=json&limit=5");

            var result = await URL;
            console.log(result);
            
            return result.artist.name;
        } catch (error) {
            return result;
        }
    }

}