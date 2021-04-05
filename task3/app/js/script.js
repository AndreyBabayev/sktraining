var arr = [8,6,12,10]; 
var myObject = {                       
  square: function(currentValue) {  
    return currentValue * currentValue;  
  }
};
var squared = arr.map( 
  function(currentValue) {
    return this.square(currentValue); 
  }, myObject);
console.log(squared);

// let nameLengths = arr.map((name) => name.length);
// console.log(nameLengths);

// for(const iterator of arr){
//     console.log(iterator);
// }

// let arg = prompt("input your number", "0");

// if (arg != null) {
//     searchElem(arg);}
// else {
//   console.log("Cancel was pressed");
// }
// function searchElem(arg){
//     let res = arr.indexOf(+arg);
//     if (res == -1) {
//       console.log("Num not found");
//     } else {

//       console.log(res);
//     }
// }