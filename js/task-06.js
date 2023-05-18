// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.

// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// 1 стукаюсь до інпуту
const validationInput = document.querySelector("#validation-input");
// 2 стукаюсь до дЕйта атрибуту
const validationInput2 = document.querySelector('input[data-length="6"]');

// 3 чипляю слухача на інпут
validationInput.addEventListener("blur", () => {
  //4  встановлюю умови якщо кількість відповідає дейта атрибуту
  if (
    validationInput.value.length === Number(validationInput2.dataset.length)
  ) {
    // 4. відаляю клас для ПОМИЛКОВОЇ кількості символів бордер ред
    validationInput.classList.remove("invalid");
    // 5. додаю клас длЯ приавльної кількості символів боредр грин
    validationInput.classList.add("valid");
  }
  //    додаю клас для помилкової кількості символів бордер ред
  else {
    validationInput.classList.add("invalid");
  }
});
