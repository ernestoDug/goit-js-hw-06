const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// 1 стукаюсь до списку
const ingridientis = document.querySelector("#ingredients");

// 2 перебираю масив через меп та стрінгую одразу ( вик ланцюг методів)
const ingredientForli = ingredients
  .map(
    (ingredient) =>
      // 3. додаю відповідний клас та напис до лі
      `<li class ="item"> ${(ingredients.textContent = ingredient)} </li>`
  )
  .join("");
// 4. додаю створені лі
ingridientis.insertAdjacentHTML("afterbegin", ingredientForli);

//5 перевіряю чи є такий клас
console.log(document.querySelector("li").classList.contains("item"));
