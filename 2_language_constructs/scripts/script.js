let time = 14;

if (time < 12) {
  console.log("Добрий ранок!");
} else if (time >= 12 && time < 18) {
  console.log("Добрий день!");
} else {
  console.log("Добрий вечір!");
}

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Понеділок";
    break;
  case 2:
    dayName = "Вівторок";
    break;
  case 3:
    dayName = "Середа";
    break;
  default:
    dayName = "Невідомий день";
}

console.log(dayName); // Виведе: Середа

let age = 20;

// Замість написання довгого if...else:
let access = (age >= 18) ? "Доступ дозволено" : "Доступ заборонено";

console.log(access); // Виведе: Доступ дозволено

let userName = null;
let displayName = userName || "Анонім"; 
// displayName буде "Анонім", оскільки userName дорівнює null (falsy)

let count = 0;
let finalCount = count ?? 10; 
// finalCount буде 0. Якби використали ||, було б 10.

let isLoggedIn = true;
isLoggedIn && console.log("Показуємо панель користувача");
// console.log виконається, бо isLoggedIn = true

let count = 0;

while (count < 3) {
  console.log("Поточне значення: " + count);
  count++; // Збільшуємо count, щоб цикл колись зупинився
}

let x = 10;

do {
  console.log("Це виконається один раз, хоча x вже більше 5");
  x++;
} while (x < 5);

// Виведе числа від 0 до 4
for (let i = 0; i < 5; i++) {
  console.log("Ітерація номер: " + i);
}

let fruits = ["Яблуко", "Банан", "Апельсин"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Виведе по черзі: Яблуко, Банан, Апельсин

let user = {
  name: "Олексій",
  age: 30,
  city: "Київ"
};

for (let key in user) {
  // key - це назва властивості (name, age, city)
  // user[key] - це значення властивості
  console.log(key + ": " + user[key]); 
}

for (let i = 0; i < 10; i++) {
  if (i === 3) break; // Цикл зупиниться, коли i стане 3
  console.log(i); // Виведе лише 0, 1, 2
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Пропускаємо код нижче, якщо i дорівнює 2
  console.log(i); // Виведе: 0, 1, 3, 4 (без двійки)
}

// Створення функції
function greetUser(name) {
  console.log("Привіт, " + name + "!");
}

// Виклик функції
greetUser("Анна"); // Виведе: Привіт, Анна!
greetUser("Олег"); // Виведе: Привіт, Олег!

let calculateArea = function(width, height) {
  return width * height;
};

// Виклик
let myRoom = calculateArea(5, 4);
console.log(myRoom); // Виведе: 20

// Звичайна стрілочна функція
const multiply = (a, b) => {
  return a * b;
};

// Якщо функція має лише один рядок коду і відразу щось повертає, 
// можна прибрати фігурні дужки і слово return:
const double = (num) => num * 2;

// Якщо параметр лише один, дужки теж можна опустити:
const square = x => x * x;

console.log(square(5)); // Виведе: 25

function sayHello(name = "Гість") {
  console.log("Привіт, " + name);
}
sayHello(); // Виведе: Привіт, Гість

let arr1 = [1, 2, 3];
// Створюємо НОВИЙ масив, розпакувавши туди елементи старого
let arr2 = [...arr1]; 

console.log(arr2); // [1, 2, 3]
// Зміна arr2 не вплине на arr1

let numbers = [10, 50, 20, 100, 30];

// Без spread ми б отримали NaN (бо передали один масив, а не числа)
// Зі spread це працює так, ніби ми написали Math.max(10, 50, 20, 100, 30)
console.log(Math.max(...numbers)); // 100

function showInfo(firstName, lastName, ...otherDetails) {
  console.log("Ім'я:", firstName);
  console.log("Прізвище:", lastName);
  console.log("Решта даних:", otherDetails); // Масив з усім, що залишилося
}

showInfo("Олексій", "Коваленко", "Київ", 30, "Розробник");
// otherDetails буде масивом: ["Київ", 30, "Розробник"]

function showAllArguments() {
  console.log(arguments[0]); // Перший аргумент
  console.log(arguments[1]); // Другий аргумент
  console.log("Всього передано: " + arguments.length);
}

showAllArguments("Яблуко", 42, true);
// Виведе:
// Яблуко
// 42
// Всього передано: 3

function heavyRecursion(i) {
  if (i === 1000000) {
    console.log("Готово!");
    return;
  }

  // Замість heavyRecursion(i + 1);
  // Відкладаємо виклик, дозволяючи поточному стеку очиститися
  setTimeout(() => heavyRecursion(i + 1), 0);
}

heavyRecursion(0); // Спрацює без RangeError, хоча й буде виконуватися довго

function createCounter() {
  let count = 0; // Ця змінна лежить у Лексичному оточенні createCounter

  // Повертаємо внутрішню функцію
  return function() {
    count++; // Вона шукає count у себе, не знаходить, і йде за посиланням назовні
    return count;
  };
}

const myCounter = createCounter(); 
// Функція createCounter відпрацювала і завершилась. 
// Теоретично, count мав би зникнути з пам'яті.

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3