// 2)//  Создайте объект calculator с методами:
// - sum () возвращает сумму двух значений
// - mul () возвращает произведение этих двух значений
// - инициализировать объект через функцию-конструктор
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );