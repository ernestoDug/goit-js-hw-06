// Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// 1. стукаюсь до Бади.
const bodyInbody = document.querySelector("body");
// 2. стукаюсь до кнопочки
const buttonIncolor = document.querySelector(".change-color");

// 2/5 стукаюсь до Спану
const spanIncolor = document.querySelector(".color");

// 4 пишу функцію фарбника

const changeColorBody = () => {
  // 5 викликається функція кольрової випадковості  щоб пофарбувати БАді
  bodyInbody.style.backgroundColor = getRandomHexColor();
  // 6 спан доносить про колір Баді
  spanIncolor.textContent = getRandomHexColor();
  // ****************************************************************************
  // 7 додав для краси зміную кольру для спану
  spanIncolor.style.color = getRandomHexColor();
};

// 8. підслуховую кнопопочку
buttonIncolor.addEventListener("click", changeColorBody);

// 9. функція кольрової випадковості від митців Завдання
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
