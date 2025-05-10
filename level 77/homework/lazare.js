document.getElementById("changeBgBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f4a261";
});

document.getElementById("changeTextBtn").addEventListener("click", function () {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.color = "red";
    });
});

document.getElementById("resetBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = "";
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.color = "";
    });
});

document.getElementById("image").addEventListener("click", function () {
    this.src = this.src.includes("image1.jpg") ? "image2.jpg" : "image1.jpg";
});