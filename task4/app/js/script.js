// Данная строка 'aaa bbb ccc ". Вырез с нее слово "bbb" тремя различными способами (через substr, substring, slice).
// let str = 'aaa bbb ccc';
// let arg = 'bbb';

// function customSubStr(src, substr){
// src = ;
// return src;
// }

var string = 'aaa bbb ccc';
var substr = string.slice(4,8);
console.log(substr);
_______________________________________________________________________
var string = 'aaa bbb ccc';
var substr = string.substr(4,4);
console.log(substr);
________________________________________________________________________
var string = 'aaa bbb ccc';
var substring = string.substring(4,7);
console.log(substring);