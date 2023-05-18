// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

// 1 стукаюсь до спана
const countValue = document.querySelector("#value");
//2 стукаюсь до  (+) кнопки
const btnIncrement = document.querySelector('button[data-action="increment"]');

//3 пишу колбек для збільшення
const plusClick = () => {
  //4 функція збільшує змінну при виклику
  counterValue += 1;
  //5 оскількі innerHTML зберігає вміст елемента, оновлює лічильник щоб він дорівнював змінній з кліками
  const newValueCounterPlus = (countValue.innerHTML = counterValue);
  return newValueCounterPlus;
};

//6 стукаюсь до  (-) кнопки
const btnDecrement = document.querySelector('button[data-action="decrement"]');

// 7 пишу колбек для зменшення
const minusClick = () => {
  // 8 функція зменшує змінну при виклику
  counterValue -= 1;
  //9 оскількі innerHTML зберігає вміст елемента, оновлює лічильник щоб він дорівнював змінній з кліками
  const newValueCounterMinus = (countValue.innerHTML = counterValue);

  // ********************************************************************************************
  // 10  трошки відсебятини фарбую значення лічильника
  return newValueCounterMinus;
};

//  11 трошки відсебятини

//12 функція фарбування  значення лічильника при натисканні кнопки (+)

const plusClickRed = () => {
  countValue.style.color = "red";
};

//  13  функція фарбування  значення лічильника при відпусканні кнопки миші (+)
const plusClickBlack = () => {
  countValue.style.color = "black";
};
// ************************************************************************************

// 14 функція фарбування  значення лічильника при натисканні  кнопки (-)
const minusClickBlue = () => {
  countValue.style.color = "blue";
};

// 15  функція фарбування  значення лічильника при відпусканні кнопки миші (-)
const minusClickBlack = () => {
  countValue.style.color = "black";
};

// 16 премьєра подіїї забарвлення в червоний
btnIncrement.addEventListener("mousedown", plusClickRed);

// 17 прем'єра події Збільшення лiчильника
btnIncrement.addEventListener("click", plusClick);

// 18 премьєра подіїї забарвлення в чорний при відпусканні кнопки
btnIncrement.addEventListener("mouseup", plusClickBlack);

//19  премьєра подіїї забарвлення в синій
btnDecrement.addEventListener("mousedown", minusClickBlue);

// 20 прем'єра події зменшення
btnDecrement.addEventListener("click", minusClick);

//21 премьєра подіїї забарвлення в чорний при відпусканні кнопки
btnDecrement.addEventListener("mouseup", minusClickBlack);
