const animal = {
  eats: true,
  walk() {
    console.log("Тварина йде");
  }
};

const rabbit = {
  jumps: true
};

// Задаємо animal як прототип для rabbit
// (Використання __proto__ вважається застарілим, 
// але чудово підходить для розуміння концепції)
rabbit.__proto__ = animal; 

console.log(rabbit.jumps);
console.log(rabbit.eats);
rabbit.walk();

class Animal {
  // Конструктор — це спеціальний метод, який викликається при створенні об'єкта
  constructor(name) {
    this.name = name; // Властивість об'єкта
  }

  // Метод класу
  speak() {
    console.log(`${this.name} видає звук.`);
  }
}

// Створення об'єкта (екземпляра класу)
const myPet = new Animal("Барсік");
myPet.speak(); // Виведе: Барсік видає звук.

class BankAccount {
  #balance; // Приватна властивість (недоступна ззовні)

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Публічний метод для поповнення рахунку
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Поповнено на ${amount}. Поточний баланс: ${this.#balance}`);
    }
  }

  // Публічний метод для отримання балансу (Геттер)
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500); 
console.log(account.getBalance()); // 1500
// console.log(account.#balance); // Помилка!

// Функція-конструктор
function Dog(name) {
  this.name = name;
}

// Додаємо метод у властивість prototype цієї функції
Dog.prototype.bark = function() {
  console.log(`${this.name} гавкає!`);
};

// Створюємо новий об'єкт
const myDog = new Dog("Рекс");

myDog.bark(); // Рекс гавкає!

const carMethods = {
  startEngine() {
    console.log(`Двигун ${this.brand} запущено!`);
  }
};

// Створюємо новий об'єкт, прототипом якого буде carMethods
const myCar = Object.create(carMethods);
myCar.brand = "Toyota"; // Додаємо власну властивість

myCar.startEngine(); // Двигун Toyota запущено!

class Calculator {
  // Статичний метод
  static add(a, b) {
    return a + b;
  }
}

// Викликаємо метод ПРЯМО з класу:
console.log(Calculator.add(5, 7)); // 12

// Якщо ми спробуємо викликати його з об'єкта, буде помилка:
const myCalc = new Calculator();
// myCalc.add(5, 7); // TypeError: myCalc.add is not a function

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  // Звичайний метод (для конкретної статті)
  read() {
    console.log(`Ви читаєте: ${this.title}`);
  }

  // Статичний метод-утиліта для порівняння двох статей
  static compareByDate(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

const articles = [
  new Article("Що таке ООП", new Date(2023, 1, 1)),
  new Article("JS для початківців", new Date(2023, 0, 15))
];

// Використовуємо статичний метод для сортування масиву
articles.sort(Article.compareByDate);

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  // Фабричний метод для створення адміна
  static createAdmin(name) {
    // this у статичному методі вказує на сам клас (User)
    return new this(name, 'admin'); 
  }

  // Фабричний метод для створення гостя
  static createGuest() {
    return new this('Анонім', 'guest');
  }
}

const admin = User.createAdmin("Олександр");
const guest = User.createGuest();

console.log(admin.role); // 'admin'
console.log(guest.name); // 'Анонім'

class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

const myDog = new Dog();

console.log(myDog instanceof Dog);    // true (бо myDog створений з Dog)
console.log(myDog instanceof Animal); // true (бо Dog успадковується від Animal)
console.log(myDog instanceof Cat);    // false (Cat — це зовсім інша гілка)