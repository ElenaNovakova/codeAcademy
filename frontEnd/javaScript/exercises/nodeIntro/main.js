var expressNunjucks = require('express-nunjucks');
var express = require("express");
var ArtistLogic = require("./src/artistLogic.js")


function mainApp() {
    var serverApp = express();
    serverApp.set('views', __dirname + '/templates');

    var njk = expressNunjucks(serverApp, {
        watch: true,
        noCache: true
    });

    serverApp.get("/", (req, res) => {
        var data = {
            title: "Home page",
            greeting: "Hello, its a me, Mario!",
            browserScript: process.env.BROWSER_REFRESH_URL
        }
        console.log(data);
        res.render('index', data);
    });

    serverApp.get("/artist/:name", async (req, res) => {
        var logic = new ArtistLogic();
        var data = await logic.getArtistPageData(req.params.name);
        return res.send(data);
    });


    
    serverApp.listen(3000, () => {
        console.log("Welcome to NodeJS, the server has started");
        if (process.send) {
            process.send('online');
        }
    })
}

mainApp();