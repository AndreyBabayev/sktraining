// С помощью цикла for сформулируйте строку 
// '-1-2-3-4-5-6-7-8-9- "и запишите ее в переменную str

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = ''
for (let i = 0; i < arr.length; i++) {
res += '-' + arr[i]
}

document.write(res + '-');