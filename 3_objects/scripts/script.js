const user = {
  name: "Олексій",       // рядок
  age: 28,               // число
  isDeveloper: true,     // логічний тип
  skills: ["JS", "React"] // масив
};

console.log(user.name); // Виведе: "Олексій"
user.age = 29;          // Змінює значення age

console.log(user["isDeveloper"]); // Виведе: true

let keyName = "skills";
console.log(user[keyName]); // Виведе масив навичок

// Додавання нової властивості
user.city = "Київ";

// Видалення властивості
delete user.isDeveloper;

const car = {
  brand: "Toyota",
  model: "Camry",
  startEngine: function() {
    console.log("Двигун запущено! Врррум!");
  }
};

car.startEngine(); // Виклик методу

// 1. Поточна дата і час (зараз)
const now = new Date(); 
console.log(now);

// 2. З рядка (найкраще використовувати формат ISO 8601: YYYY-MM-DDTHH:mm:ss.sssZ)
const fromString = new Date("2024-05-15T12:00:00");

// 3. З мілісекунд (від 1 січня 1970)
const fromMs = new Date(1715760000000);

// 4. З окремих компонентів (рік, місяць, день, години, хвилини, секунди, мілісекунди)
// УВАГА: Місяці починаються з нуля!
const fromComponents = new Date(2024, 4, 15, 12, 30, 0);

const date = new Date("2024-10-31T15:45:00");

console.log(date.getFullYear()); // 2024 (не використовуйте застарілий getYear!)
console.log(date.getMonth());    // 9 (Жовтень)
console.log(date.getDate());     // 31 (число місяця)
console.log(date.getDay());      // 4 (день тижня, четвер)
console.log(date.getHours());    // 15
console.log(date.getMinutes());  // 45
console.log(date.getTime());     // кількість мілісекунд (timestamp)

const today = new Date();

// Простий локалізований вивід (залежить від налаштувань браузера)
console.log(today.toLocaleDateString("uk-UA")); // "30.04.2026" (наприклад)
console.log(today.toLocaleTimeString("uk-UA")); // "13:26:22"

// Гнучке налаштування формату:
const formatter = new Intl.DateTimeFormat("uk-UA", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

console.log(formatter.format(today)); // "четвер, 30 квітня 2026 р."

console.log(Math.PI); // 3.141592653589793 (Пі)
console.log(Math.E);  // 2.718281828459045 (Число Ейлера)

Math.round(3.4); // 3
Math.round(3.5); // 4

Math.floor(3.9); // 3
Math.floor(-1.1); // -2

Math.ceil(3.1); // 4
Math.ceil(-1.9); // -1

Math.trunc(3.9); // 3
Math.trunc(-1.9); // -1

console.log(Math.random()); // Наприклад: 0.742819234

// Випадкове число від 1 до 6
const dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

console.log(Math.max(5, 10, 2, 100)); // 100
console.log(Math.min(5, -2, 10));     // -2

console.log(Math.max(5, 10, 2, 100)); // 100
console.log(Math.min(5, -2, 10));     // -2

const numbers = [4, 12, 55, 1, 9];
console.log(Math.max(...numbers)); // 55

console.log(Math.sqrt(25)); // 5
console.log(Math.pow(2, 2)); // 4
console.log(Math.abs(-2)); // 2

const fruits = ["Яблуко", "Банан", "Апельсин"];
fruits.forEach(console.log)

// Отримання елементів за індексом
console.log(fruits[0]); // "Яблуко" (перший вагон)
console.log(fruits[1]); // "Банан"
console.log(fruits[2]); // "Апельсин"

// Довжина масиву (кількість елементів)
console.log(fruits.length); // 3

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

const ages = [12, 18, 25, 10, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 30]

const prices = [10, 20, 30];
const total = prices.reduce((sum, current) => sum + current, 0);
console.log(total); // 60

const word = "JavaScript";

console.log(word.length); // 10 (довжина рядка)
console.log(word[0]);     // "J" (перший символ)

// Крута сучасна фішка (метод .at) для доступу з кінця:
console.log(word.at(-1)); // "t" (останній символ, працює і для масивів!)

"Привіт".toLowerCase(); // "привіт"
"Привіт".toUpperCase(); // "ПРИВІТ"

const text = "Я люблю JavaScript";
text.includes("люблю");     // true (чи містить слово?)
text.startsWith("Я");       // true (чи починається з?)
text.indexOf("JavaScript"); // 8 (повертає індекс початку слова)

const str = "Frontend";
str.slice(0, 5); // "Front"
str.slice(4);    // "tend" (ріже до самого кінця)

const msg = "Я люблю чай, чай це супер!";
msg.replace("чай", "каву");    // "Я люблю каву, чай це супер!" (замінить лише перше співпадіння)
msg.replaceAll("чай", "каву"); // "Я люблю каву, каву це супер!" (замінить усі)

const sentence = "Один Два Три";

// Розбиваємо по пробілу
const words = sentence.split(" "); 
console.log(words); // ["Один", "Два", "Три"]

// Склеюємо через дефіс
console.log(words.join("-")); // "Один-Два-Три"

console.log("Початок");

// Встановлюємо будильник на 2000 мілісекунд (2 секунди)
setTimeout(() => {
  console.log("Пройшло 2 секунди!");
}, 2000);

console.log("Кінець");

let count = 0;

setInterval(() => {
  count += 1;
  console.log(`Тік-так: ${count}`);
}, 1000);

let seconds = 0;

// Зберігаємо id таймера у змінну timerId
const timerId = setInterval(() => {
  seconds += 1;
  console.log(`Пройшло секунд: ${seconds}`);
  
  // Коли дійдемо до 5, зупиняємо таймер
  if (seconds === 5) {
    clearInterval(timerId);
    console.log("Таймер зупинено!");
  }
}, 1000);
