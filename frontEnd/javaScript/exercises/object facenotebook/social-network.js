function SocialNetwork() {
    this.users = [];
    this.events = [];

    this.generateUsers = function () {
        for (let i = 0; i < 50; i++) {
            var user = new User(i);
            this.users.push(user);
        };
    };

    this.generateEvents = function () {
        for (let i = 0; i < 5; i++) {
            var event = new Event(i);
            this.events.push(event);
        };
    }; 

    this.eventChoosUser = function () {
        for (let i = 0; i < this.users.length; i++) {
            var userEvent = getRandom(0, 5);
            this.events[userEvent].userList.push(this.users[i]);
            for (let j = 0; j < 3; j++) {
                this.sendEventRequest(i);
            }
        }
    };

    this.sendEventRequest = function(i){
        var userEvent = getRandom(0, 5);
        if (!this.events[userEvent].userList.includes(this.users[i])) {
            this.events[userEvent].userList.push(this.users[i]);
        }
    }

    this.addFriend = function () {
        for (let i = 0; i < this.users.length; i++) {
            var userFriend = getRandom(1, this.users.length);
            this.users[userFriend].friendList.push(this.users[i]);
            this.users[i].friendList.push(this.users[userFriend]);
            if (this.users[userFriend].friendList.length > 5) {
                break;
            }
        }
    }

    this.generateEvents();
    this.generateUsers();
    this.eventChoosUser();
    this.addFriend();
}

