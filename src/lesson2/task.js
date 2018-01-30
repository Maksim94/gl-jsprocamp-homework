/*
  Напишите функцию, которая параметрами принимает 2 числа и возвращает их сумму
*/

export const sum = (a, b) => +a + +b;

/*
  Напишите функцию, которая возвращает сумму всех чисел, что передаются параметрами
*/

export const sumAll = (...args) => args.reduce((acc, curr) => acc + +curr, 0);
/*
  Напишите функцию, которая возвращает число x в степень n
*/
export const pow = (x, n) => x ** n;

/*
  Напишите функцию, которая возвращает рандомное целое число от from до to
*/
export const random = (from, to) => (
  /* eslint no-mixed-operators: ["error", {"allowSamePrecedence": true}] */
  Math.floor(Math.random() * (to - from + 1)) + from
);

export default {
  sum,
  sumAll,
  pow,
  random,
};
