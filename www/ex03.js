// execute the anonymous function when the window is completely loaded!
window.onload = function () {
    showResults();
    document.querySelector("#btnAdd").onclick = function () {
        doMath("+");
    };
    document.querySelector("#btnSub").onclick = function () {
        doMath("-");
    };
    document.querySelector("#btnMul").onclick = function () {
        doMath("*");
    };
    document.querySelector("#btnDiv").onclick = function () {
        doMath("/");
    };
    document.querySelector("#btnMod").onclick = function () {
        doMath("%");
    };
};

function doMath(op) {
    var num1 = document.querySelector("#num1").value;
    var num2 = document.querySelector("#num2").value;

    var result = "";

    if (isNaN(num1) || isNaN(num2)) {
        result = "<span class='err'>One ore both inputs were non-numeric!</span>";
    }
    else {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var str = num1 + op + num2;

        result = str + " = " + eval(str);
    }

    // window.localStorage.getItem("resultArray");
    // window.localStorage["resultArray"];
    var resultArray = window.localStorage.resultArray;
    if (!resultArray) {
        resultArray = "[]";
    }
    resultArray = JSON.parse(resultArray);
    resultArray.push(result);
    resultArray = JSON.stringify(resultArray);
    window.localStorage.setItem("resultArray", resultArray);

    showResults();
}

function showResults() {
    var resultArray = window.localStorage.resultArray;
    if (!resultArray) {
        resultArray = "[]";
    }
    resultArray = JSON.parse(resultArray);
    var btn = document.querySelector("div#output ~ button");

    var msg = "";
    if (resultArray.length == 0) {
        btn.style.display = "none";
        msg = "<h3 class='err'>No results so far!</h3>";
    }
    else {
        btn.style.display = "inline-block";

        resultArray.forEach( r => msg += r + "<br>");
        // resultArray.forEach(function(r) {
        //     msg += r + "<br>";
        // });
    }

    document.getElementById("output").innerHTML = msg;
}