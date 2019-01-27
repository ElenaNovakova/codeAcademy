import {RenderArtist} from "/presentation-layer/artistPageRender.js";
import * as jQuery from "/jquery-3.3.1.min.js";




export function main() {
    var renderer = new RenderArtist();

    // $("body").html("Bla");  

    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        renderer.renderAll(hash);
    } else{
        renderer.renderAll("Pearl+Jam"); 
    }
      
}
main();