// 21) сделать проверку на ширину экрана, 
// если меньше 768px то к элементу 
// добавить класс

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        console.log("Screen width is at least 768px");
    } else {
        console.log("");
    }
});
