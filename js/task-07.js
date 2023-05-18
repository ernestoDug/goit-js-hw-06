// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// 1 стукаюсь до повзунка

const controlSize = document.querySelector("#font-size-control");
// 2 стукаюсь до спану
const spanText = document.querySelector("#text");
// 3 пишу колбек
const setFontSize = () => {
  // 4. ініциалізую змінную для значення з інпуту
  const controlValue = controlSize.value;
  // 5. роблю велью в пікселях
  const controlValueInPixel = `${controlValue}px`;
  // 6. прирівнюю розмір шрифту спану до значення рейндж инпуту у пІскселях
  spanText.style.fontSize = controlValueInPixel;
};

// 7 чипляю слухача
controlSize.addEventListener("input", setFontSize);

// ************************************************************************
// 8 додаю від себе фокус
controlSize.addEventListener("focus", () => {
  spanText.style.color = "green";
});
// 9 додаю від себе блур
controlSize.addEventListener("blur", () => {
  spanText.style.color = "black";
});
