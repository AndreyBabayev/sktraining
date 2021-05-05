console.log("start");
setTimeout(function() { alert( 'стоп' );}, 5000);

let promise=new Promise(function(resolve, reject){
setTimeout(()=>reject( new Error ('error'), 5000));

})
promise.then(
    result=>alert(result),
    error=>alert(error));

    console.log("finish");







// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// $.ajax({
//     type: "GET",
//     cache: false,
//     url: "https://jsonplaceholder.typicode.com/todos/5000",
//     success: function (data, textStatus, request) {
//       // console.log(data);
//       data = JSON.stringify(data);
//       // console.log(data);
//       data = JSON.parse(data);
//       let result = "";
//       for (let i = 0; i < data.length; i++) {
//         result +=
//           "<tr>" +
//           "<td>" +
//           data[i].userId +
//           "</td>" +
//           "<td>" +
//           data[i].id +
//           "</td>" +
//           "<td>" +
//           data[i].title +
//           "</td>" +
//           "<td>" +
//           data[i].completed +
//           "</td>" +
//           "</tr>";
//       }
//       $("#result").append("<table>" + result + "</table>");
  
//       // console.log(textStatus);
//       // console.log(request);
//     },
//     error: function(error){
//         console.log (error);
//     }
//   });
  