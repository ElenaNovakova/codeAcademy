module.exports = function Album(data) {
    this.name = data.name;
    this.artisTrack = data.tracks;
    this.artistAlbum = data.artistAlbum;
    this.image = data.image;
}