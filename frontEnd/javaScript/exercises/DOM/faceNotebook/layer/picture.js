function Picture() {
    this.link = "img/img.jpg"
    this.altText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nihil doloribus.";
    this.flag = false;
}

function ProfilePictire() {
    this.flag = true;
}

ProfilePictire.prototype = new Picture()

