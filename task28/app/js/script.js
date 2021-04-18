// 28) С помощью цикла вывести пользователей как онлайн
// {
//  Alan: {
//  online: false
//  },
//  Jeff: {
//  online: true
//  },
//  Sarah: {
//  online: false
//  }
// }
let users = {
    Alan: {
    online: false
    },
    Jeff: {
    online: true
    },
    Sarah: {
    online: false
    },
   };

function countOnline(users) {
    let amount = 0;
   
    for (const user in users) {
      if (users[user].online) {
        amount++;
      }
    }
  
    return amount;
  }
  
  const a = countOnline({
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  });
  
  console.log(a);