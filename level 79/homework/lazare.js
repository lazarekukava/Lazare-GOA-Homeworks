

        let num1 = 10;
        let num2 = 5;
        let text = "hi this is JavaScript";
        let isTrue = true;
        let array = [1, 2, 3, 4, 5];
        let obj = { name: "lazare", age: 25 };


        let sum = num1 + num2;
        let product = num1 * num2;
        let message = text + " we are learning JavaScript";

        console.log("sum:", sum);
        console.log("divaded:", product);
        console.log("text combination:", message);


        console.log("num1 > num2:", num1 > num2);
        console.log("num1 < num2:", num1 < num2);
        console.log("num1 == num2:", num1 == num2);
        console.log("num1 != num2:", num1 != num2);
        console.log("num1 >= num2:", num1 >= num2);
        console.log("num1 <= num2:", num1 <= num2);


        function confirmExit() {
            let userChoice = confirm("want to leave site?");
            if (userChoice) {
                console.log("you will leave the site soon");
            } else {
                console.log("you are staying on the site");
            }
        }
