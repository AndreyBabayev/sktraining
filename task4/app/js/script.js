// Результатов на странице аватар своего профиля github
// https://api.github.com/users/${user.name}

const name = 'https://api.github.com/users/AndreyBabayev';

$.ajax({
    url: name,
    type: 'GET',
    dataType:'json',
    success: function(res){
        console.log(res);
        for (let item in res){
          console.log(item +"="+res[item]);
          $('#result').append('<div>'+res[item]+'</div>');
          }
        // $('#result').append('<div>'+res.avatar_url+'</div>');
        // $('#result').append('<div>'+JSON.stringify(res)+'</div>');
    }
  })
  
