// function showMessage(from, text) {
//   alert(from + ":" + text);
// }
// showMessage("Anna", "Hello"); // Anna:Hello

// const add = function (a, b, c) {
//   return a + b + c;
// };

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function showOk() {
//   alert("Ви погодились");
// }
// function showCancel() {
//   alert("Ви скасували виконання");
// }

// let x = 10;
// let y = 20;
// const foo = (z) => {
//   let x = 100;
//   return x + y + z;
// };

// функції

// const add = function (a, b, c) {
//   return a + b + c;
// };

// add();
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask();
// function showOk() {
//   alert("Ви погодились.");
// }
// showOk();

// function showCancel() {
//   alert("Ви скасували виконання.");
// }
// showCancel();

// let x = 10;
// let y = 20;
// const foo = (z) => {
//   let x = 100;
//   return x + y + z;
// };
// console.log(foo);

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }

// checkAge();

// function showMessage() {
//   console.log("Hello");
// }

// showMessage();

// Параметри і аргументи -  в  дужках після назви функції

// function showMessage(name, city) {
//   console.log("Hello my name is " + name + " I'm from " + city);
// }

// showMessage("Nata", "Kyiv"); // Hello my name is Nata I'm from Kyiv
// showMessage("Katya", "Chernigiv"); // Hello my name is Katya I'm from Chernigiv

// Функціональний вираз
// const sayHi = function () {
//   console.log("Hi");
// };
// sayHi(); // Hi

// const sayHi = function () {
//   let message = "Hello, my name is Ivan";
//   console.log(message);
// };

// sayHi(); // Hello, my name is Ivan

// const userName = "Ann";
// const sayHi = function () {
//   let message = "Hello, my name is ";
//   console.log(message + userName);
// };
// sayHi(); // Hello, my name is Ann

// Повернення

// function sum(a, b) {
//   let c = a + b;
//   return c;
// }
// let result = sum(5, 9);
// console.log(result); // 14

// теж саме
// function sum(a, b) {
//   return a + b;
// }
// let result = sum(7, 8);
// console.log(result); // 15

// const testFunk = function (a, b) {
//   console.log("a :", a);
//   console.log("b :", b);
// };
// testFunk(5, 8); // a :5       b : 8

// return - зупиняє виконання функції

// const testFunk = function (a, b) {
//   console.log("a :", a);
//   console.log("b :", b);
//   c = a + b; // ігнорується, оскільки return
//   return 100;
// };

// testFunk(5, 8); // a :5       b : 8

// Порядок виконання коду

// const a = function () {
//   c();
//   console.log("function a");
//   b();
// };

// const b = function () {
//   console.log("function b");
// };

// const c = function () {
//   console.log("function c");
// };
// a(); // function c function a function b

// аргументи

// const addName = function () {
//   console.log(arguments);
// };
// addName(); // Arguments
// addName(1, 3, 5); // Arguments (3) 1, 3, 5

// робимо масив з поперднього
// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
// };

// addName(1, 3, 5); // Arguments (3) 1, 3, 5   (3) 1, 3, 5

// rest

// const addName = function (...arg) {
//   console.log(arg);
// };
// addName(1, 3, 5); // (3) 1, 3, 5

// callback - функції зворотнбого виклику

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   console.log("You say ok");
// }

// function showCancel() {
//   console.log("You say no");
// }

// ask("Yes or no?", showOk, showCancel);

// HOF - high order function

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// hello("Ann"); // Hello, Ann

// якщо імя не доступне

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };
// const searchName = function (callback) {
//   const name = "Ivan";
//   callback(name);
// };

// searchName(hello); // Hello, Ivan

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Hello");
//   } else {
//     console.log("Good Bye");
//   }
// }

// checkAge(12); // Good bye
// checkAge(21); // Hello

// або можна так:

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Hello");
//   }
//   return console.log("Good Bye");
// }

// checkAge(12); // Good bye
// checkAge(21); // Hello

// return - не обовязково має щось повертати
// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }
//   return console.log("Go to Movie!");
// }
// showMovie(12); //
// showMovie(21); // Go to Movie!

// стрілочні функції

// const test = (arg) => {
//   console.log(arg);
// };
// test("hello"); // hello

// const showMovie = (age) => {
//   if (age > 21) {
//     return console.log("Hello");
//   }
//   return console.log("Bye");
// };

// showMovie(22); // Hello
// showMovie(12); // Bye

// Контексти і виклики

// const a = () => {
//   console.log(a);
// };

// const b = () => {
//   console.log(b);
// };

// const c = () => {
//   console.log(c);
//   a();
//   b();
// };

// c(); // c a b

// console.log(document); // видає файл html

// const numberRef = document.querySelector('input[name="number"]');
// // console.log(numberRef); // <input type="number" name="number" value="123" />
// // console.log(numberRef.value); // 123

// const buttonrRef = document.querySelector("button");
// // console.log(buttonrRef); // <button>Go!</button>

// // вішаємо на кнопку "слухача" addEventListener(на яку подію раегувати, функція яка буде виконуватись)

// // buttonrRef.addEventListener("click", () => {
// //   console.log("клац");
// // }); // клац - стільки разів, скільки кликаємо

// buttonrRef.addEventListener("click", () => {
//   console.log(numberRef.value);
// }); // видає цифру, яку вводимо в поле вводу (але прибираємо value="123" з HTML)

// const addNumber = (number) => {
//   let summ = number + 10;
//   return console.log(summ);
// };
// const numberRef = document.querySelector('input[name="number"]');
// const buttonrRef = document.querySelector("button");
// buttonrRef.addEventListener("click", () => addNumber(numberRef.value));
// вводимо в поле вводу 10 - отримуємо 1010. Тому, що з input
// ми завжди отримуємо string. Для цього переводимо в Number
// const addNumber = (number) => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };
// const numberRef = document.querySelector('input[name="number"]');
// const buttonrRef = document.querySelector("button");
// buttonrRef.addEventListener("click", () => addNumber(numberRef.value));
// вводимо 10 - отрумаємо 20
