

        var textVar = "this is text";
        var numberVar = 42;
        var boolVar = true;
        var arrayVar = ["JavaScript", "CSS", "HTML"];

        function showConsole() {
            console.log("Text:", textVar);
            console.log("Number:", numberVar);
            console.log("Boolean:", boolVar);
            console.log("Array:", arrayVar);
        }

        function mergeVariables() {
            var merged = textVar + " " + numberVar + " " + boolVar + " " + arrayVar.join(", ");
            console.log("mixed cvladebi:", merged);
        }
