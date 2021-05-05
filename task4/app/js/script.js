// // выполнить ajax запросы 
// через api https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
    // API вернул результат
    console.log('success!', response);
  }).catch(function (err) {
    // Что-то пошло не так
    console.warn('Ошибка получения.');
    console.log(err);
  });