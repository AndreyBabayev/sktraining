// 24. Дано двумерный массив с числами, 
// например [[1, 2, 3], [4, 5], [6]]. 
// Найдите сумму элементов этого массива.
function sum(a) { 
    var b=0; 
    for (var i=0; i<a.length; i++) { 
    for (var j=0; j<a[i].length; j++){ 
    b += a[i][j]; 
    } 
    } 
    return b; 
    } 
    console.log(sum([[1, 2, 3], [4, 5], [6]]));