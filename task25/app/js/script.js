// 25) Сделайте функцию getDigitsSum
//  (digit - это цифра), 
// которая параметром принимает целое 
// число и возвращает сумму его
// цифр.

function getDigitsSum(a) { 
    var str = 0; 
    var a = String(a); 
    for (var i=0; i < a.length; i++) { 
    str += Number(a[i]); 
    } 
    return str; 
    } 
    console.log(getDigitsSum(351));