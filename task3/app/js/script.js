// 1)
// // <div>Технології:</div>
// //  <ul class=”list”>
// //  <li>HTML</li>
// //  <li>CSS</li>
// //  </ul>
// // ● найти элемент с классом list
// // ● найти другой li и изменить в нем текст
// // ● сделать текст в div красным

let body = document.body;
let count = body.children.length;

for(let i=0; i<count;i++){
    if(body.children[i].nodeName == 'UL'){
    console.log(body.children[i].nodeName);
}

if(body.children[i].children.length > 0){
  
  for(let j=0; j< body.children[i].children.length; j++ )
  {if(j==1){
    console.log(body.children[i].children[j].innerHTML);
    break;
  }}

  let elems = document.getElementsByClassName ('LIST').innerHTML;
  console.log(document.getElementsByClassName('LIST').innerHTML)
  }}
   document.getElementsByTagName('DIV')[2].style.color = "red";

