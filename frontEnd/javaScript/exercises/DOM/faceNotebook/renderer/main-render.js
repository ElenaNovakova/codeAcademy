function PageRenderer(data) {
    this.userData = data;
    this.renderAll = function () {
        var mainContainer = document.getElementById("main-container");
        mainContainer.style.display = "grid";

        mainContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
        mainContainer.style.gridTemplateRows = "repeat(2, 1fr)";
        mainContainer.style.gridGap = "50px";
        mainContainer.style.width = "100%";

        mainContainer.appendChild(this.renderLeft());
        mainContainer.appendChild(this.renderRight());
    }

    this.renderLeft = function () {
        var leftContainer = document.createElement("div");
        leftContainer.style.width = "30%";
        leftContainer.style.display = "flex";
        leftContainer.style.flexDirection = "column";


        var profileContainer = document.createElement("div");
        profileContainer.style.height = "100%";
        profileContainer.style.width = "100%";
        var profileImage = document.createElement("img");
        profileImage.style.width = "250px";
        profileImage.style.height = "350px";
        profileImage.src = this.userData.profilePicture.link;
        profileImage.alt = this.userData.profilePicture.altText;
        profileContainer.appendChild(profileImage);

        var aboutMeContainer = document.createElement("div");
        var aboutName = document.createElement("h1");
        aboutName.innerHTML = this.userData.name + " " + this.userData.id;

        var aboutHeader = document.createElement("h2");
        aboutHeader.innerHTML = this.userData.biography.header;

        var aboutText = document.createElement("p");
        aboutText.innerHTML = this.userData.biography.text;


        aboutMeContainer.appendChild(aboutName);
        aboutMeContainer.appendChild(aboutHeader);
        aboutMeContainer.appendChild(aboutText);


        leftContainer.appendChild(profileContainer);
        leftContainer.appendChild(aboutMeContainer);

        return leftContainer;
    }

    this.renderRight = function () {
        var rightContainer = document.createElement("div");
        rightContainer.style.width = "60%"
        rightContainer.style.position = "relative";

        var pictureContainer = document.createElement("div");
        pictureContainer.style.display = "grid";
        pictureContainer.style.gridTemplateColumns = "repeat(5, 1fr)";
        pictureContainer.style.gridTemplateRows = "repeat(2, 1fr)";
        pictureContainer.style.gridGap = "20px";


        var storyContainer = document.createElement("div");

        for (let i = 0; i < this.userData.album.length; i++) {
            var picture = document.createElement("div");
            var image = document.createElement("img");

            image.src = this.userData.album[i].link;
            image.alt = this.userData.album[i].altText;
            image.id = i;

            image.style.width = "200px";
            image.style.height = "300px";

            var that = this;

            image.addEventListener("click", function (event) {
                var popupDiv = document.createElement('div');
                popupDiv.id = event.target.id;
                popupDiv.style.position = "absolute";
                popupDiv.style.top = "100px";
                popupDiv.style.left = "100px";
                popupDiv.style.width = "400px";
                popupDiv.style.height = "400px";
                popupDiv.style.display = "flex";
               


                var image = document.createElement("img");
                image.src = that.userData.album[event.target.id].link;
                image.style.width = "100%";
                image.style.height = "100%";

                var before = document.createElement("div");
                before.innerHTML = "<";
                before.style.height = "50px";
                before.style.height = "50px";
                before.style.backgroundColor = "green";
                before.style.alignSelf = "center";

                before.addEventListener("click", function(event){
                    if (event.target.id < 0) {
                        that.userData.album[event.target.id - 1].link; //???????
                        console.log("bla");
                    } else {
                        that.userData.album[event.target.id--].link;///?????
                        console.log("bla");
                    }
                    
                    
                });

                var after = document.createElement("div");
                after.innerHTML = ">";
                after.style.height = "50px";
                after.style.height = "50px";
                after.style.backgroundColor = "pink";
                after.style.alignSelf = "center";

                after.addEventListener("click", function(){
                    that.userData.album[event.target.id++].link;
                    console.log("blAAA");
                    
                });


                rightContainer.appendChild(popupDiv);
                popupDiv.appendChild(before);
                popupDiv.appendChild(image);
                popupDiv.appendChild(after);
            });

            image.addEventListener("mouseout", function (event) {
                event.target.style.width = "200px";
                event.target.style.height = "300px";
            });


            pictureContainer.appendChild(picture);
            picture.appendChild(image)
        };


        for (let i = 0; i < this.userData.storys.length; i++) {
            var story = document.createElement("div");
            var storyText = document.createElement("p");
            var storyDate = document.createElement("span");
            storyText.innerHTML = this.userData.storys[i].text;
            storyDate.innerHTML = this.userData.storys[i].storyDate;

            storyContainer.appendChild(story);
            story.appendChild(storyText);
            story.appendChild(storyDate);
        }

        rightContainer.appendChild(pictureContainer);
        rightContainer.appendChild(storyContainer);
        return rightContainer;
    }
}