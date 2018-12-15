function startupWebpage() {
    var userData = new SocialNetwork();
    var page = new PageRenderer(userData.users[0]);
    page.renderAll();
}

startupWebpage();