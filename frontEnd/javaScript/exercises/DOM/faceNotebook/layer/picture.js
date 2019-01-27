function Picture() {
    this.link = "img/img.jpg";
    this.altText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nihil doloribus.";
    this.flag = false;
}

function ProfilePictire() {
    this.flag = true;
    this.link = "img/img.jpg";
}

ProfilePictire.prototype = new Picture()

