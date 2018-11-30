var student = {
    name: "Jana",
    gender: "female",
    yearOfBirth: 2006,
    grades: [2,4,5,3,5,5,2,4,1],
    subject: "History",

    average: function () {
        var sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i]; 
        }        
        console.log(sum / this.grades.length );
    },

    favoriteSubject: function () {
       console.log(this.name + " favorite subject is " + this.subject);
        
    },

    calcAge: function () {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}


var student = new Object();

student.name = "Jana";
student.gender = "female";
student.yearOfBirth = 2006;
student.grades = [2,4,5,3,5,5,2,4,1];
student.subject = "History";
student.average =  function () {
    var sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i]; 
    }        
    console.log(sum / this.grades.length );
};
student.favoriteSubject = function () {
    console.log(this.name + " favorite subject is " + this.subject);
     
 };

 student.calcAge =  function () {
    return new Date().getFullYear() - this.yearOfBirth;
};

student.checkLetter = function() {
    if (this.name.includes("a")){
        return true;
    }
}


function Phones(name, camera, os, price) {
    this.name = name;
    this.camera = camera;
    this.os = os;
    this.price = price;

    this.rington = function () {
        console.log(this.name, "is ringing like brrrr");
    }
    
}

var motorola = new Phones("Motorola", true, "Android", 3500);

var nokia = new Phones("Nokia", true, "windows", 1500);

var samsung = new Phones("Samsung", false, "unknown", 500);

var apple = new Phones("Apple 7", true, "IOS", 5000);

var huawei = new Phones("Huawei", true, "Android", 2000);