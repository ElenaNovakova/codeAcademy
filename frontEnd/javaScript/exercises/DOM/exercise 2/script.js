// Create a Javascript function that changes an element’s style.

// Create one paragraph with text, and one button

// Call the function changeStyle() when you click on the button

// The paragraph should change its Color,Font Style, and Font Size



function EventParagtafh() {

    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae pariatur perspiciatis, autem magni necessitatibus quo facilis reiciendis veritatis! Iure tempora molestiae quos officia aperiam eos beatae, consectetur expedita est eaque."

    var mainDiv = document.getElementById("main");
    mainDiv.appendChild(paragraph);

    paragraph.addEventListener("click", function(event){
        event.target.style.color = "red";
        event.target.style.fontSize = "20px";
    })
}

EventParagtafh();