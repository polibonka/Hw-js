"use strict";

//1

const user = {
  hobby: "art",
  premium: true,
};

const { hobby: userHobby, premium: userPremium } = user;

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.log(user);

const users = Object.keys(user);

for (let keys of users) {
  console.log(`keys: ${keys}, value: ${user[keys]}`);
}

//2

const countProps = (obj) => {
  const properties = {
    property1: "house",
    property2: "car",
  };
  const{ property, property2 } = properties;
  const numProperties = Object.keys(properties).length;

  return numProperties;
};
console.log(countProps());

// 3

const findBestEmployee = (employees) => {
  let bestEmployee = "";
  let maxTask = 0;
  for (let employee in employees) {
    if (employees[employee] > 0) {
      maxTask = employees[employee];
      bestEmployee = employee;
    }
  }
  return bestEmployee;
};

console.log(findBestEmployee({ Ann: 5, David: 8, Helen: 11 }));

// 4
const countTotalSalary = function (employees) {
  let total = 0;
  for (let employee in employees) {
    total += employees[employee];
  }
  return total;
};
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// 5

const products1 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];
const { name: name1, price: price1, quantity: quantity1 } = products1[0];
const { name: name2, price: price2, quantity: quantity2 } = products1[1];
const { name: name3, price: price3, quantity: quantity3 } = products1[2];
const { name: name4, price: price4, quantity: quantity4 } = products1[3];


const getAllPropValues = function (arr, prop) {
  return arr.map((item) => item[prop]);
};
console.log(getAllPropValues(products1, "name"));

//6

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];
const { name: nameProducts1, price: priceProducts1, quantity: quantityProducts1 } = products[0];
const { name: nameProducts2, price: priceProducts2, quantity: quantityProducts2 } = products[1];
const { name: nameProducts3, price: priceProducts3, quantity: quantityProducts3 } = products[2];
const { name: nameProducts4, price: priceProducts4, quantity: quantityProducts4 } = products[3];

const calculateTotalPrice = function (allProdcuts, productName) {
  const product = allProdcuts.find((product) => product.name === productName);
  return product ? product.price * product.quantity : 0;
};
console.log(calculateTotalPrice(products, "Радар"));

//7

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
const { DEPOSIT, WITHDRAW } = Transaction;
/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    const id = this.transactions.length;
    return { id, type, amount };
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Недостатньо коштів");
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    return this.transactions.find((item) => item.id === id);
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    return this.transactions.filter((item) => item.type === type);
  },
};

account.deposit(500);
console.log(account.getBalance());

account.deposit(1000);
console.log(account.getBalance());

account.withdraw(500);
console.log(account.getBalance());

account.withdraw(200);
console.log(account.getBalance());

console.log(account.transactions);

console.log(account.getTransactionDetails(3));
