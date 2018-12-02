function LuxuryHotel() {
    this.workDay = function (day) {
        //todo not implemented
        console.log("Today is ", day);
        
    }

    this.buildRooms = function () {
        for (let index = 0; index < 120; index++) {
            var room = new Object(index) // doto not implemented
            this.rooms.push(room);
        }        
    }

    this.hireEmployee = function (employee) {
        this.employees.push(employee);
        this.employeesHired +=1;
    }
    this.rooms = [];
    this.employees = [];
    this.restorant = new Object (); //todo not implemented
    this.employeesHired = 0;
    this.income = 0;
    this.guestServed = 0;
    this.generateHotel = function () {
        this.buildRooms();
    }
    this.generateHotel();
}