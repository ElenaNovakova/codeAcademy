import {ArtistRepository} from "/repositories/artistRepository.js";
import {AlbumRepository} from "/repositories/albumRepository.js";

export function ArtistLogic() {
    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    this.searchArray = [];
    
    this.getArtistPageData = async function(artistName) {
        var artist =  await this.artistRepo.getArtist(artistName);
        var albumNames = await this.artistRepo.getTopAlbumNames(artistName);
        var album = await this.albumRepo.getAlbum(artistName, albumNames);
        
        var pageData = {
            artist: artist,
            album: album
        }
        return pageData;
    }

    this.getSearchInputs = async function(artistSearch){
        this.searchArray.push(artistSearch)
        var getArtist = await this.artistSearchDepo.searchArtist(this.enterCharacters.join("").toString());
        console.log("logic search", this.enterCharacters.join("").toString());
        return getArtist;
    }

}

// repozitori pobaruva od api ako dobie gi dava na logikata, logikata pravi artist po sablon od artist i gi predava kako artist na rendererot