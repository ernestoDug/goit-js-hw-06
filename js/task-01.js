// Напиши скрипт, який:
// Для кожного элемента li.item у списку ul#categories, знайде і
// виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// 1 СТУКАЮСЬ ДО ВСІХ ЛІ
const categoriesLi = document.querySelectorAll("li.item");
// 2 ВИВОДЖУ КІЛЬКІСТЬ
console.log("Number of categories:" + " " + categoriesLi.length);

// 3 виводжу назви заголовків
categoriesLi.forEach((elem) => {
  const titlesH2 = elem.querySelector("li.item > h2");
  console.log("Category:" + " " + titlesH2.textContent);
  // 4 виводжу кількіість категорій під заголовками
  const categoriesOfH2 = elem.querySelector("h2 ~ ul");
  console.log("Elements:" + " " + categoriesOfH2.children.length);
});
