// Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// 1. стукаюсь до Бади.
const bodyS = document.querySelector("body");
// 2. стукаюсь до кнопочки
const buttonIncolor = document.querySelector(".change-color");

// 3 стукаюсь до Спану
const spanIncolor = document.querySelector(".color");

// 4 пишу функцію фарбника

const newBG = () => {
  // 5. запишу виклик функцііїї кольрової випадковсті у змінну
  const newColor = getRandomHexColor();
  // const rr =  newColor.replace("#", "0x");
  // 6 додаю атрибут але він не замінює старий  чомусь хекс колір навіть через 0X ЗАМІСТЬ КРАПКИ НЕ ПРАЦЮЄ
  // замість цьогоо  КОЛІР СТАЄ В rgb... у body.
  bodyS.setAttribute("backGround-color", newColor);
  // 7 фарбую баді
  bodyS.style.backgroundColor = newColor;

  // 8 виводжу колір в спан
  spanIncolor.textContent = newColor;
  // 8/2 ЗНАЧІЕННЯ КОЛЬРУ ВИВОДЖУ АЛЕ ВСЕ Ж ТАКИ ЩОСЬ НЕ ТЕ З ФОНОМ
  console.log(newColor);
};

// 9 вішаю слухача
buttonIncolor.addEventListener("click", newBG);

// 10 функція випадкової колірності
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
