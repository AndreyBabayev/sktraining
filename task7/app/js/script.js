// Данная строка 'I learn javascript! ". 
// Найдите позицию подстроки "learn" и длину строки. 
// Заменить javascript на html

var replacement = "html";
var toReplace = "javascript";
var str = 'I learn javascript!';    
var toReplaceRegex = new RegExp(toReplace, "g");
str = str.replace(toReplaceRegex, replacement); 
console.log(str);


