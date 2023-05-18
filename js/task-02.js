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

// 1 народжую  Лі1
const neoTeg1 = document.createElement("li");
// 2 додаю текст до лі
neoTeg1.textContent = "Potatoes";
// 3 роблю Лі класним
neoTeg1.classList.add("item");

// 4 народжую  Лі2
const neoTeg2 = document.createElement("li");
//5 додаю текст до лі
neoTeg2.textContent = "Mushrooms";
//6 роблю Лі класним
neoTeg2.classList.add("item");

//7 народжую  Лі3
const neoTeg3 = document.createElement("li");
// 8 додаю текст до лі
neoTeg3.textContent = "Garlic";
//9 роблю Лі класним
neoTeg3.classList.add("item");

//10 народжую  Лі4
const neoTeg4 = document.createElement("li");
//11 додаю текст до лі
neoTeg4.textContent = "Tomatos";
//12 роблю Лі класним
neoTeg4.classList.add("item");

//13 народжую  Лі5
const neoTeg5 = document.createElement("li");
//14 додаю текст до лі
neoTeg5.textContent = "Herbs";
//15 роблю Лі класним
neoTeg5.classList.add("item");

// 16 народжую  Лі6
const neoTeg6 = document.createElement("li");
//17 додаю текст до лі
neoTeg6.textContent = "Condiments";
//18 роблю Лі класним
neoTeg6.classList.add("item");

//19 стукаюсь до HTML
const listAmNyam = document.querySelector("ul#ingredients");
//20 інтегрую народженів братів Лі у світ HTML
listAmNyam.prepend(neoTeg1, neoTeg2, neoTeg3, neoTeg4, neoTeg5, neoTeg6);

//21 перевіряю наявність класності у Лі 6 РАЗ

console.log(
  "Коротко про наявність класу item для Potatoes:" +
    " " +
    neoTeg1.classList.contains("item")
);
console.log(
  "Коротко про наявність класу item для Mushrooms:" +
    " " +
    neoTeg2.classList.contains("item")
);
console.log(
  "Коротко про наявність класу item для Garlic:" +
    " " +
    neoTeg3.classList.contains("item")
);
console.log(
  "Коротко про наявність класу item для Tomatos:" +
    " " +
    neoTeg4.classList.contains("item")
);
console.log(
  "Коротко про наявність класу item для Herbs:" +
    " " +
    neoTeg5.classList.contains("item")
);
console.log(
  "Коротко про наявність класу item для Condiments:" +
    " " +
    neoTeg6.classList.contains("item")
);
