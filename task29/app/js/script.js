// 29) подсвечивать ячейки таблицы при наведении
var tabastdire = document.getElementById("tabstoid").getElementsByTagName("td");
arr = [];
[].forEach.call(tabastdire, function(cell, i) {
    var k = cell.cellIndex;
    arr[k] ? arr[k].push(cell) : (arr[k] = [cell]);
    cell.onmouseover = function() {
        arr[k].forEach(function(el) {
            el.style.backgroundColor = "#CBFFDD"
        })
        this.style.backgroundColor = "#00CC47"
    }
    cell.onmouseout = function() {
        arr[k].forEach(function(el) {
       el.style.backgroundColor = ""
       })
    }
})