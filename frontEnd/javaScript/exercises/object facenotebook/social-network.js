function SocialNetwork() {
    this.users = [];
    this.events = [];


    this.generateUsers = function () {
        for (let i = 1; i <= 50; i++) {
            var user = new User(i);
            this.users.push(user);
        };
    };

    this.generateEvents = function () {
        for (let i = 1; i <= 5; i++) {
            var event = new Event(i);
            event.userList.push(i)
            this.events.push(event);
        };
    };

    this.userChoosEvent = function () {
        for (let i = 0; i < this.users.length; i++) {
            for (let ј = 0; ј < 3; ј++) {
                var userEvent = getRandom(0, 5);
                this.events[userEvent].userList.push(this.users[i]);
            }
        }
    };

    this.addFriend = function () {
        for (let i = 1; i < this.users.length; i++){
                var userFriend = getRandom(0, this.users.length - 1);
                this.users[userFriend].friendList.push(this.users[i]);
        }
    }

    // da se podobri: da nema isti user vo eden event i da sekoj user ima max 5 prijateli

    this.generateEvents();
    this.generateUsers();
    this.userChoosEvent();
    this.addFriend();
}

