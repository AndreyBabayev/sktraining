class User {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      console.log("Hi from " + this.name);
    }
  }
  
  // let user = new User("Alex");
  // user.sayHi();
  
  class Admin extends User {
    sayHi() {
      super.sayHi();
      console.log("By from " + this.name);
    }
  }
  let admin = new Admin("Serhii");
  console.log(admin.sayHi());
  
