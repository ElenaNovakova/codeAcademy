function Calculator() {
    this.savedOperations = [];
    this.mainDisplay = [];
    this.addValue = function (val) {
        this.mainDisplay.push(val);
    };

    this.removeValue = function () {
        this.mainDisplay.pop();
    };

    this.checkDispaly = function(){
        return parseInt(this.mainDisplay.join(""));
    };

    var that = this;

   
}