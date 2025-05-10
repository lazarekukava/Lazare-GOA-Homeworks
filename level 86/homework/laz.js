
function calculatePrice() {
    let age = document.getElementById("age").value;
    let result = document.getElementById("result");
    
    if (isNaN(age) || age < 0) {
        result.textContent = "Please enter a valid age.";
    } else if (age < 6) {
        result.textContent = "Your ticket is free.";
    } else if (age >= 6 && age <= 17) {
        result.textContent = "Your ticket price is 5 GEL.";
    } else if (age >= 18 && age <= 64) {
        result.textContent = "Your ticket price is 10 GEL.";
    } else {
        result.textContent = "Your ticket price is 7 GEL.";
    }
}