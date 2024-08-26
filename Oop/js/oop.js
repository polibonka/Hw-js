"use strict";

//1

const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  // прототип функції Account
  console.log(`login ${this.login}, email${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

//2

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name}, is ${this.age} years old and has ${this.followers} followers`
    );
  }
}
const mango1 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

mango1.getInfo(); // User Mango is 2 years old and has 20 followers

const poly1 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly1.getInfo();

//3

class Storage {
  constructor(items) {
    this.items = items;
  }

  // Метод для отримання поточного масиву товарів
  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

//4

class StringBuilder {
  constructor(str) {
    this._value = str;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

class Car {
  static getSpecs(car) {
    return car;
  }
  constructor({ speed, price, maxSpeed, isOn, distance }) {
    this.speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    this.speed = Math.min(this.speed + value, this.maxSpeed);
}
decelerate(value) {
    this.speed = Math.max(this.speed - value, 0);

}
  drive(distance) {
    if (this.isOn && this.speed > 0 && this.distance + distance <= this.maxSpeed) {
      this.distance += distance;
    }
  }

}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000



