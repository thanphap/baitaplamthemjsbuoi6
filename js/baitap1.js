/**
 * Bài 1
 * In dãy số nguyên tố
 */

function inChuoi() {
    var number = Number(document.getElementById("number").value);
    var total = "";
    for (var i = 2; i <= number; i++) {
        var check = true;
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                check = false;
                break;
            }
        }
        if (check == true) {
            total += i + " ";
        }
    }
    document.getElementById("txtResult1").innerHTML = total;
}

document.getElementById("btnTinh1").onclick = inChuoi;