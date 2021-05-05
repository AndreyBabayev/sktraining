class User {
    constructor(name) {
    this.name = name; // вызывают сеттер
    }
    get name() {
    return this._name;
    }
    set name(value) {
    if (value.length < 4) {
    alert("имя короткое");
    return;
    }
    this._name = value;
    }
   }
   let user = new User("John");
   alert(user.name); // John
   user = new User(""); // имя короткое