"use strict";

//1

const bankAccount = {
  ownerName: "Piter",
  accountNumber: +8579879029,
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}$. Current balance: ${this.balance}$`);
  },
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}$.Current balance: ${this.balance}$`);
    } else {
      console.log("Insufficient funds!");
    }
  },
};

console.log("Initial balance:", bankAccount.balance);
bankAccount.deposit(500);
bankAccount.withdraw(400);
bankAccount.withdraw(1500);

// 2

const weather = {
  temperature: -5,
  humidity: 54,
  windSpeed: 2,

  celcius() {
    if (this.temperature < 0) {
      console.log("Температура нижче 0 градусів Цельсія");
      return true;
    } else {
      console.log("Температура вище або рівна 0 градусів Цельсія");
      return false;
    }
  },
};
weather.celcius();

// 3

const user = {
  name: "Polii",
  email: "polibonka@gmail.com",
  password: 1234567890,

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log("Login successful!");
    } else {
      console.log("Incorrect email or password. Please try again.");
    }
  },
};
user.login();
user.login("polibonka@gmail.com", 1234567890);

//4

const movie = {
  title: "Red Notice",
  director: "Rawson Marshall Thurber",
  year: "2021",
  rating: "6.3",

  Rating() {
    if (this.rating >= 8) {
      console.log("Рейтинг вище 8");
      return true;
    } else {
      console.log("Рейтинг ниже 8");
      return false;
    }
  },
};
movie.Rating();
