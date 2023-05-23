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

// - стукаюсь до списку
const ingridientis = document.querySelector("#ingredients");
// - створюю змінну з масивом:
const arrayIngridient = [];
// - перебираю масив  мепom  де одразу створюю лі через createElement
const ingredientForli = ingredients.map((ingredient) => {
  const newLi = document.createElement("li");
  // - додаю напис
  newLi.textContent = `${(ingredients.textContent = ingredient)}`;
  // - додаю клас
  newLi.classList.add("item");
  // - закидаю у створений  масив перебране з старого
  arrayIngridient.push(newLi);
});
// додаю до дерева розпиленням
ingridientis.append(...arrayIngridient);
//- перевіряю чи є такий клас
console.log(document.querySelector("li").classList.contains("item"));
