// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки
// і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// 1 стукаюсь до галерии
const galery = document.querySelector(".gallery");
// 2 перебираю масив чтворюю лішки з малюнками з відповіднии класами та атрибутами до имедж використовую лаццюг методів
const animalsPicture = images
  .map(
    (image) =>
      `<li class = "animalPackForImage"> <img class="animals" src="${image.url}" alt="${image.alt}"> </li>`
  )
  .join("");
//3  додаю лішки до  дерева
galery.insertAdjacentHTML("afterbegin", animalsPicture);
