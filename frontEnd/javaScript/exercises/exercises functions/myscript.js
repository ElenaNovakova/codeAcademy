// alert("bla bla");

// var foot;

// function convertMatars(foot) {
//     var metars  = foot / 0.3048;
//     console.log(metars);
// }

// convertMatars(5);
// convertMatars(15);


// var $metars;

// function convertFoots($metars) {
//     var $foot = $metars *  0.3048;
//     console.log($foot);
// }

// convertFoots(5);
// convertFoots(15);


// function calcFarenheit (celsius){
//     var celsius;
//     var farenhite = celsius * 1.8 + 32;
//     console.log(farenhite);  
// }

// calcFarenheit(5);

// function calcCelsius (farenhite){
//     var farenhite;
//     var celsius = (farenhite - 32 ) / 1.8;
//     console.log(celsius);  
// }

// calcFarenheit(14);

// moj obid
// var celsius = 5;
// var farenhite = 10;
//  var temperatura;

//     if (temperatura == celsius) {
//         function calcTemperature(temperatura){
//        var farenhite = celsius * 1.8 + 32;
//         console.log(farenhite);  
//         }
//     } else {
//         function calcTemperature(temperatura){
//         var celsius = (farenhite - 32 ) / 1.8;
//         console.log(celsius);
//         }
//     }



// calcTemperature(celsius);
// calcTemperature(farenhite);

//Vladimir re[enie

function convert(temperatura, type) {
   if (type === "C") {
    return temperatura * 1.8 + 32;
   } else if (type === "F"){
    return temperatura 5 / 9  (temperatura - 32)
   } else {
       return "the value cant be convert"
   }

}