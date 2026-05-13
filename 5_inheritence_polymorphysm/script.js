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

class Dog extends Animal {
  constructor(name, breed) {
    // super() викликає конструктор батьківського класу (Animal)
    // Це ОБОВ'ЯЗКОВО зробити перед використанням this
    super(name); 
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} гавкає!`);
  }
}

const myDog = new Dog("Рекс", "Вівчарка");
myDog.speak(); // Успадкований метод: Рекс видає звук.
myDog.bark();  // Власний метод: Рекс гавкає!

class Cat extends Animal {
  // Перевизначаємо метод speak() батьківського класу
  speak() {
    console.log(`${this.name} каже: Мяу!`);
  }
}

class Cow extends Animal {
  // Перевизначаємо метод speak() батьківського класу
  speak() {
    console.log(`${this.name} каже: Мууу!`);
  }
}

const animals = [new Dog("Бровко", "Дворняга"), new Cat("Мурчик"), new Cow("Мілка")];

// Один і той самий метод викликає різну поведінку
animals.forEach(animal => animal.speak());
// Бровко видає звук. (Метод не був перевизначений у класі Dog)
// Мурчик каже: Мяу!
// Мілка каже: Мууу!

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    // 1. Спочатку просимо Employee створити this і записати туди name та salary
    super(name, salary); 
    
    // 2. Тепер можемо користуватися this і додавати специфічні для Manager властивості
    this.department = department; 
  }
}

const boss = new Manager("Олена", 5000, "IT");
console.log(boss.name); // Олена

class Printer {
  print(text) {
    console.log(`Друк: ${text}`);
  }
}

class SecurePrinter extends Printer {
  print(text) {
    // Викликаємо оригінальний метод батька за допомогою super.print()
    super.print(`[ЗАШИФРОВАНО] ${text}`);
    console.log("Лог: Документ успішно роздруковано.");
  }
}

const myPrinter = new SecurePrinter();
myPrinter.print("Секретний звіт"); 
// Виведе:
// Друк: [ЗАШИФРОВАНО] Секретний звіт
// Лог: Документ успішно роздруковано.

class Notification {
  send(message) {
    console.log(`Базове сповіщення: ${message}`);
  }
}

class EmailNotification extends Notification {
  send(message) {
    console.log(`Відправка Email: 📧 ${message}`);
  }
}

class SMSNotification extends Notification {
  send(message) {
    console.log(`Відправка SMS: 📱 ${message}`);
  }
}

// Функція, яка нічого не знає про конкретні класи, 
// вона знає лише, що у переданих об'єктів є метод send().
function notifyUsers(notificationsArray, msg) {
  notificationsArray.forEach(notification => {
    notification.send(msg); // Поліморфізм у дії!
  });
}

const myAlerts = [new EmailNotification(), new SMSNotification(), new EmailNotification()];

notifyUsers(myAlerts, "Сервер оновлено!");
// Виведе:
// Відправка Email: 📧 Сервер оновлено!
// Відправка SMS: 📱 Сервер оновлено!
// Відправка Email: 📧 Сервер оновлено!

class Car {
  drive() { console.log("Машина їде по дорозі"); }
}

class Boat {
  drive() { console.log("Човен пливе по воді"); }
}

class GolfCart {
  drive() { console.log("Гольф-кар їде по траві"); }
}

const vehicles = [new Car(), new Boat(), new GolfCart()];

// JavaScript не хвилює, що вони не успадковані від одного класу Vehicle.
// Головне — вони всі мають метод drive().
vehicles.forEach(v => v.drive());