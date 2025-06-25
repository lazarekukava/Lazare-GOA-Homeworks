
        document.getElementById("alertButton").addEventListener("click", function() {
            alert("please pay attention!");
        });

        document.getElementById("sizeButton1").addEventListener("click", function() {
            let photo = document.getElementById("photo1");
            photo.style.width = (photo.style.width === "200px") ? "300px" : "200px";
        });

        document.getElementById("sizeButton2").addEventListener("click", function() {
            let photo = document.getElementById("photo2");
            photo.style.width = (photo.style.width === "200px") ? "300px" : "200px";
        });

        document.getElementById("srcButton1").addEventListener("click", function() {
            document.getElementById("photo1").src = "new_photo1.jpg";
        });

        document.getElementById("srcButton2").addEventListener("click", function() {
            document.getElementById("photo2").src = "new_photo2.jpg";
        });

        document.getElementById("colorButton").addEventListener("click", function() {
            let buttons = document.querySelectorAll("button");
            let randomIndex = Math.floor(Math.random() * buttons.length);
            buttons[randomIndex].style.backgroundColor = "#f39c12";
        });