function User(name) {
    this.id = getRandom(100000, 999999);
    this.name = "name " + name;
    this.profilePicture = new ProfilePictire();
    this.numberOfPictures = getRandom(5, 15);
    this.album = [];
    this.friendList = [];

    this.getPictures = function (){
        for (let i = 0; i < this.numberOfPictures; i++) {
            var picture = new Picture();
            this.album.push(picture);
        }
    }
    this.getPictures();

    this.biography = new Story();
    this.storys = [];
    this.getStorys = function() {
        for (let i = 1; i <= 5; i++) {
            var story = new Story();
            this.storys.push(story);            
        }
        this.storys.sort(function(a, b){
            var sort = a.storyDate - b.storyDate;
            return a.storyDate - b.storyDate;
        });
    }
    this.getStorys();
 
}