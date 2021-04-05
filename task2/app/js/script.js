let str = "Lorem ipsuma is simply dummy loreman gertruda syrnni";

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("Lorem ipsuma is simply dummy loreman gertruda syrnni"));

// let arr = str.split (' ');
// for (let i = 0; i < arr.length; i++){  
//   if(arr[i].length >= 5) {
//     console.log(arr[i]);
//   }    
// }