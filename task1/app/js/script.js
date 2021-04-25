// Сделать попапы (модальное окно). 
// Показывать его при клике на кнопку и 
// при уменьшении экрана - меньше 768рх
// https://getbootstrap.com/docs/3.3/javascript/#modals
// ● https://jquery-docs.ru/resize/

let popup= document.getElementById('mypopup'),
popupToggle=document.getElementById('btn'),
popupClose=document.querySelector('.close');

popupToggle.onclick=function() {
    popup.style.display="block"; 
   
};
popupClose.onclick=function() {
    popup.style.display="none";
  
}
window.onclick=function(e){
    if(e.target ==popup){
        popup.style.display="none";
    }
}
$(window).resize(function() {
if($(this).width() < 768) {
popup.style.display="block";
}
})
