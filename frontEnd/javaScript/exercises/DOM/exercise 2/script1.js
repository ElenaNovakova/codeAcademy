// Write a JavaScript function to get the width and height of the browser window

// The function should print the height and width when you resize the window.

function calculateWidthAndHight (){
 
    window.addEventListener("resize", function(){
        console.log(innerWidth, innerHeight);
        
    })    
}

calculateWidthAndHight();