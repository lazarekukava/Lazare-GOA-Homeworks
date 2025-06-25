    
   
    function addContent() {
        let container = document.getElementById("div");
        
        let newParagraph = document.createElement("p");
        newParagraph.textContent = "new text";
        container.appendChild(newParagraph);
        
        let newButton = document.createElement("button");
        newButton.textContent = "new Button";
        newButton.onclick = function() {
            alert("new button clicked");
        };
        container.appendChild(newButton);
    }