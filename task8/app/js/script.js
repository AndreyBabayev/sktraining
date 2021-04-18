// Проверьте, что строка начинается на http: //
var str = 'http://phphtml';
if (str.substr(0, 7) == 'http://') {
	alert('Да');
} else {
	alert('Нет');
}
________________________________________________________
let linkGoogle = 'http://google.com';
let result = (linkGoogle.slice(0, 7) === 'http://' )
console.log(result);
