// Одно из первых приложений, которое обычно пишут JS dev это калькулятор. 
// Стоит попробывать, если еще не сделали
// addEventListener
var memory;  //this needs to be declared before starting the function  

function init() {
    document.getElementById('n0').addEventListener("click", number0, false); //addEventListener was misspelt
}

function number0() {
    document.getElementById('display').value += 0;
    memory += 0;
    return 0;
}

window.addEventListener("load", init(), false);