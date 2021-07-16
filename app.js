function forLoop() {
    var output1 = "";
    var num = 10;
    for (var i = 1; i <= 10; i++) {
        output1 += num + "x" + i + "=" + i * num + "<br>";
    }
    document.getElementById("output-for").innerHTML = output1;
}

function forOf() {
    var output2 = "";
    var x;
    var cars = ["BMW", "Maruti", "Audi", "Swift"];
    for (x of cars) {
        output2 += x + "<br>";
    }
    document.getElementById("output-for-of").innerHTML = output2;
}

function whileLoop() {
    var output3 = "";
    var cars = ["BMW", "Maruti", "Audi", "Swift"];
    var i = 0;
    while (i < cars.length) {
        output3 += cars[i] + "<br>";
        i++;
    }
    document.getElementById("output-while-loop").innerHTML = output3;
}

function doWhileLoop() {
    var output4 = "";
    var n1 = 0,
        n2 = 1;
    var nextN = n1 + n2;
    do {
        output4 += nextN + "<br>";
        n1 = n2;
        n2 = nextN;
        nextN = n1 + n2;
    } while (nextN <= 20);
    document.getElementById("output-do-while-loop").innerHTML = output4;
}

document.getElementById("output-for").addEventListener("click", forLoop);
document.getElementById("output-for-of").addEventListener("click", forOf);
document.getElementById("output-while-loop").addEventListener("click", whileLoop);
document.getElementById("output-do-while-loop").addEventListener("click", doWhileLoop);