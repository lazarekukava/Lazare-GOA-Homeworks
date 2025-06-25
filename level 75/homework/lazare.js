document.addEventListener("DOMContentLoaded", function () {
    console.log("2 + 3 =", 2 + 3);
    console.log("10 * 5 =", 10 * 5);
    console.log("50 / 2 =", 50 / 2);
});

document.getElementById("myButton").addEventListener("click", function () {
    this.classList.toggle("rounded");
});