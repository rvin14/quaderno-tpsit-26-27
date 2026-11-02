// TODO scrivi lo script
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");
const btnCalcola = document.getElementById("btn-calcola");
let r1 = document.getElementById("soluzione1");
let r2 = document.getElementById("soluzione2");

btnCalcola.addEventListener("click", () => {
    let a = aInput.value;
    let b = bInput.value;
    let c = cInput.value;

    let result1 = 0;
    let result2 = 0;

    if (a == "") {a = 1}
    else if (b == "") {b = 1}
    else if (c == "") {c = 1}

    a = parseFloat(aInput.value);
    b = parseFloat(bInput.value);
    c = parseFloat(cInput.value);

    let delta = (b**2) - (4 * a * c);

    if (delta < 0) {
        result1 = ("impossibile");
        result2 = ("impossibile");
    } else if (delta > 0) {
        result1 = ((-b + (delta**0.5)) / (a*2));
        result2 = ((-b - (delta**0.5)) / (a*2));
    } else if (delta == 0) {
        result1 = (-b / (a*2));
        result2 = result1;
    }

    r1.textContent = '' + result1;
    r2.textContent = '' + result2;

});
