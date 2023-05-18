// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення
// в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// 1 стукаюсь до інпуту
const inputArea = document.querySelector("#name-input");
// 2 стукаюсь до спану виводу
const outputSpan = document.querySelector("#name-output");

// 3 чипляю слухача НА ІНПУТ
inputArea.addEventListener("input", (event) => {
  //4  визначаю елемент обробки події за домогою curentTargetБ а щоб спан приймав текст з інпуту
  // використовую властивість value яка містить поточний текстовий контент інпуту.

  outputSpan.textContent = event.currentTarget.value;

  //5 визначаю, а що  буде коли інпут не заповнений
  if (inputArea.value === "") {
    outputSpan.textContent = "Anonymous";
    // *********************************************************************
    //6 погрався з кольором анонимуса
    outputSpan.style.color = "violet";
  }
});
