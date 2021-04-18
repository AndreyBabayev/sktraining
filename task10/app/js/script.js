// Выведите 10 случайных чисел с помощью цикла

var arr = [];
for (var i = 0; i < 30; i++) {
	arr.push(Math.round(Math.random() * 10) + 1);
}
console.log(arr);