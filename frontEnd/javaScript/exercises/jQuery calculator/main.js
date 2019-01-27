$(document).ready(function(){
    var calculator = new Calculator();
    var renderer = new Renderer(calculator);
    renderer.renderAll();
})