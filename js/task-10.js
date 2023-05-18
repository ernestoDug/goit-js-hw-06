// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку
//  Створити, після чого рендериться колекція. Натисненням на кнопку
//   Очистити, колекція елементів очищається.

// <div id="boxes"></div>

// 1/ стукаюсь до інпута
const numberColection = document.querySelector('input[type="number"]');
// 2 стукаюсь до кнопки створення через дата атрибут
const btnCreate = document.querySelector("button[data-create]");
// 3 стукаюсь до кнопки очищення через дата атрибут
const btnDestroy = document.querySelector("button[data-destroy]");
//  4 стукаюсь до дiву для  колекції
const colectionDiv = document.querySelector("#boxes");
// 5 пишу функцію створення дівів
const createDiv = () => {
  // 6  циклізую тут  число ітерацій дорівнює value  інпуту
  for (let i = 1; i <= numberColection.value; i++) {
    //  7 створюю діви
    const newDivs = document.createElement("div");
    // **********************************************************************
    // 7/2 додаю текст до дівив від себе
    newDivs.textContent = " Посміхніться ;) DІВЧИК №" + [i];
    // 7/2/1 ФАРБУЮ ТЕСТ ВІД СЕБЕ
    newDivs.style.color = getRandomHexColor();
    // 8 додаю діви
    colectionDiv.append(newDivs);

    // 10 фарбую дівчики функцією кольрової випадковості з завдання 9
    newDivs.style.backgroundColor = getRandomHexColor();
  }
};
// 11 пишу ФУНКЦИЮ СТИРАННЯ ДІВІВ
const destroyDivs = () => {
  colectionDiv.innerHTML = "";
};
//  / 12. підслуховую кнопопочку створення
btnCreate.addEventListener("click", createDiv);
// 13 підслуховую инпут ТА ФІКСУЮ ВВЕДЕННІ ДАННІ
numberColection.addEventListener("input", (event) => {
  numberColection.value = Number(event.currentTarget.value);
});
//  / 14 підслуховую кнопопочку стирання
btnDestroy.addEventListener("click", destroyDivs);

//   15. функція кольрової випадковості від митців Завдання № 9
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
