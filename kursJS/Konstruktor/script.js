
// function Car(name, brand, engine, mile, age) {
//     this.name = name;
//     this.brand = brand;
//     this.engine = engine;
//     this.mile = mile;
//     this.age = age;
// }

// Car.prototype.printDetails = function () {
//     console.log("Nazwa: " + this.name);
//     console.log("Marka: " + this.brand);
//     console.log("Silnik: " + this.engine);
//     console.log("Przebieg: " + this.mile);
//     console.log("Wiek: " + this.age);
// }

// const car1 = new Car("Mustang", "Ford", 2.7, 0, 0);
// car1.printDetails();

const Enemy = function(name, speed, attack, posX) {
    this.name = name;
    this.live = 5;
    this.speed = speed;
    this.attack = attack;
    this.posX = posX;
}