// 23) Дан массив с числами. 
// Или не используя метода reverse 
// переверните его элементы в обратном порядке.

function arr(a) { 
    var b = []; 
    for (var i=a.length-1; i>=0; i--) { 
    b.push(a[i]); 
    } 
    return b; 
    } 
    console.log(arr([1, 5, 6, 7]));