function Picture() {
    this.link = new URL ("https://www.google.com/");
    this.altText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nihil doloribus.";
    this.flag = false;
}

function ProfilePictire() {
    this.flag = true;
}

ProfilePictire.prototype = new Picture()

