// ● написать обработчик на событие клик чтобы элемент перемещался на 
// координаты клика
// ● сделать dropdown (выпадающий список)

block = document.getElementById('block');
block.onclick = function(event)
  {
  block.innerHTML = 'Относительно окна: ' +
    event.clientX + ' ' + event.clientY +
    '<br>Относительно документа: ' +
    event.pageX + ' ' + event.pageY;
  };
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}