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