

    document.getElementById("button").addEventListener("click", function() {

    let newButton = document.createElement("button");
    newButton.innerText = "New Button";
    document.getElementById("div").appendChild(newButton);

    });