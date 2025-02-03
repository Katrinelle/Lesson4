// Домашнє завдання
// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }
// checkAge(20);

// function checkAge(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }

// checkAge(20);

// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }
// checkAge(10);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function minNumber(a, b) {
//   if (a < b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }

// minNumber(10, 5); // 5

// ---3---
// Перепишіть з використанням стрілкових функцій Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// const ask = (question, yes, no) => (confirm(question) ? yes() : no());

// ask(
//   "Ви згодні?",
//   (yes = () => alert("Ви погодились.")),
//   (no = () => alert("Ви скасували виконання."))
// );
