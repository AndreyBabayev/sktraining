// 1)// дано объект// let skill = {// name: ‘html’,// level: 5// }
// Написать метод который вернет срока вида "html - 5"
let skill = {
    name: "html",
    level: 5,
    fullName: function(){
    return this.name + " " + this.level;
}
};    
alert(fullName);
