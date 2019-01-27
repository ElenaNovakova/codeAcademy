import { ArtistLogic } from "/business-layer/artistLogic.js";

export function RenderArtist() {
    moment.locale("mk");
    this.artistPageData = new ArtistLogic();
    this.artistData = {};

    this.renderAll = async function (artistName) {
        this.artistData = await this.artistPageData.getArtistPageData(artistName);

        $("<div>").addClass("artist-container").appendTo("#main-container");

        var $artistContainer = $(".artist-container");
        $artistContainer
            .append(this.renderArtistProfile())
            .append(this.renderSimilar())
            .append(this.renderBio())
            .append(this.renderArtistAlbum());
    }

    this.renderArtistProfile = function () {
        var $artist = $("<div>").addClass("artist-name");

        $("<h2>").appendTo($artist).html(this.artistData.artist.name);
        $("<img>").attr("src", this.artistData.artist.image[3]["#text"]).appendTo($artist);

        return $artist;
    };

    this.renderSimilar = function () {
        var $similarArtist = $("<div>").addClass("similar");
        $similarArtist.prepend($("<span>").addClass("similarMainSpan").html("Similar Artists"));

        for (let index = 0; index < this.artistData.artist.similar.artist.length; index++) {
            $similarArtist.append($("<div>").addClass("similarArtist").append($("<img>").addClass("similarImg").attr("src", this.artistData.artist.similar.artist[index].image[1]["#text"])).append($("<a>").addClass("similarSpan").attr("href", this.artistPageData.getArtistPageData(this.artistData)).html(this.artistData.artist.similar.artist[index].name))).on("click", (event) => {
                event.preventDefault();
                $("#main-container").html("");
                console.log(event.target);

                this.renderAll(event.target.text)

            });
        }
        return $similarArtist;
    };

    this.renderBio = function () {
        return $("<div>").addClass("artist-bio").append($("<span>").html(moment(this.artistData.artist.bio.published).format("DD - MMMM - YYYY"))).append($("<span>").html(this.artistData.artist.stats.listeners).append($(("<p>")).text(" -- Listeners "))).append($("<span>").html(this.artistData.artist.stats.playcount).append($(("<p>")).text(" -- Playcounts "))).append($("<div>").addClass("LastSpan").html(this.artistData.artist.bio.summary));
    };

    this.renderArtistAlbum = function () {
        var $albums = $("<div>").addClass("artist-album").appendTo(".artist-container");

        for (let i = 0; i < 5; i++) {
            var $albumWrap = $("<div>").addClass("albumWrap").appendTo($albums)
            $("<div>").addClass("albumName").html(this.artistData.album[i].name).appendTo($albumWrap);
            $("<img>").addClass("album-photo").attr("src", this.artistData.album[i].image[2]["#text"]).appendTo($albumWrap);
        }
        return $albums;
    };

    this.renderSearchBar = function () {
        $("<div>").addClass("searchContainer").appendTo("#main-container")
        $("<input>").appendTo(".searchContainer").attr("placeholder", "search").addClass("searchInput")
        $("<button>").appendTo(".searchContainer").html("Search")

        $("<div>").appendTo(".searchContainer").addClass("searchDiv")


        $(".searchInput").keypress(function(){
               this.serachArtis = artistPageData.getSearchInputs(String.fromCharCode(event.which)) 
                
          });
       

        // to do: da ne se povtoruva koga ke odi na sli;en artist, tretata vezba od vladimir
    }

    this.renderSearchBar();
}