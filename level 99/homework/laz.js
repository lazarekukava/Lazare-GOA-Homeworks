const paragraph = document.createElement("p");
const text = document.createTextNode("This is added by javascript");
paragraph.appendChild(text);
document.body.appendChild(paragraph);



const heading = document.createElement("h2");
heading.textContent = "welcome";
const existingDiv = document.getElementById("mydiv"); 
existingDiv.appendChild(heading);



const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "blue";
newDiv.textContent = "This is a blue div";
document.body.appendChild(newDiv);


const button = document.createElement("button");
button.textContent = "click Me";
const targetDiv = document.getElementById("emptydiv"); 
targetDiv.appendChild(button);




const span = document.createElement("span");
span.textContent = "important!";
span.style.color = "red";

const targetParagraph = document.getElementById("targetparagraph"); 
targetParagraph.appendChild(span);




