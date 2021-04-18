// 27) С помощью цикла вывести все 
// трицифрови числа в которых сумма 
// всех цифр равна - 9 
// Например: 2 + 4 + 3 = 9

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumNine(numbers) {
var obj = {};
var result = [];

for(var i = 0; i < numbers.length; i++) {
   var elem = numbers[i];
   
for(var j = i + 1; j < numbers.length; j++) {
      var item = numbers[j];
   
      

      if(elem + elem + item != 9) continue;

      var num = elem + '+' + item + '+'+ elem;
      obj[num] = num;
   }

}

for(var key in obj) {
   result.push(obj[key]);
}

return result;
}

document.writeln(sumNine(numbers)); 