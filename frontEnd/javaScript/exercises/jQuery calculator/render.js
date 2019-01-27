function Renderer(calc){
    this.calculator = calc;
    this.RenderAll(){
        $("<div>").addClass("calculatorContainer").appendTo("div#main")

        $('<div>').addClass("calculator__display").appendTo("div.calculatorContainer");
      
        $("<div>").addClass("calculator__keys").appendTo("div.calculatorContainer");

        $("<button>").addClass("key--operator").appendTo("div.calculator__keys").text("+");
        $("<button>").addClass("key--operator").appendTo("div.calculator__keys").text("-");
        $("<button>").addClass("key--operator").appendTo("div.calculator__keys").text("*");
        $("<button>").addClass("key--operator").appendTo("div.calculator__keys").text("/");

        $("<button>").appendTo("div.calculator__keys").text("7").attr("id", "sedum");
        $("<button>").appendTo("div.calculator__keys").text("8").attr("id", "osum");
        $("<button>").appendTo("div.calculator__keys").text("9").attr("id", "devet");
        $("<button>").appendTo("div.calculator__keys").text("4").attr("id", "cetiri");
        $("<button>").appendTo("div.calculator__keys").text("5").attr("id", "pet");
        $("<button>").appendTo("div.calculator__keys").text("6").attr("id", "sest");
        $("<button>").appendTo("div.calculator__keys").text("1").attr("id", "eden");
        $("<button>").appendTo("div.calculator__keys").text("2").attr("id", "dva");
        $("<button>").appendTo("div.calculator__keys").text("3").attr("id", "tri");
        $("<button>").appendTo("div.calculator__keys").text("0").attr("id", "nula");

        $("<button>").appendTo("div.calculator__keys").text(".").addClass("decimal");
        $("<button>").appendTo("div.calculator__keys").text("AC").addClass("clear");
        $("<button>").appendTo("div.calculator__keys").text("=").addClass("key--equal");
    }
}



