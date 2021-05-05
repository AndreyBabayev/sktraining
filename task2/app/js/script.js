function Animal(name){
    this.name = name;
    this.speed = 0;
   }

   function Rabbit(name) {
    this.name=name;
    this.speed=0;
    this.eats = true;
   }
   // 2.1. Наследование
   Rabbit.prototype = Object.create(Animal.prototype);
   Rabbit.prototype.constructor = Rabbit;
   let obj =new Rabbit("Rex");

   for(let item in obj)
{
    console.log(item+"="+obj.hasOwnProperty(item));
}   
String.prototype.repeat = function(times){
    return new Array(times+1).join(this);
  }
   
  console.log("serhii".repeat(5));
  
 

//    // методи в прототипі
//    Animal.prototype.run = function(speed) {
//     this.speed += speed;
//     alert( this.name + ' бежит, скорость ' + this.speed );
//    };
//    let animal = new Animal(‘Зверь’);
//    alert( animal.speed ); // 0, свойство взято из прототипа
//    animal.run(5); // Зверь бежит, скорость 5