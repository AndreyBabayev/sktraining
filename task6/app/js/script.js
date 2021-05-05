// Результатов на странице аватар своего профиля github
// https://api.github.com/users/${user.name}
fetch('https://github.com/AndreyBabayev')
 .then(response => response.json())
 .then(user => alert(user.name));

async function f() {
 try {
 let response = await fetch('https://github.com/AndreyBabayev');
 let user = await response.json();
 } catch(err) {
 console.log(err);
 }
}
f()