/*
  Напишите функцию, которая параметрами принимает 2 числа и возвращает их сумму
*/

const isNumber = n => (
  typeof n === 'number' && !Number.isNaN(n)
);

const isTwoValidNumbers = args => (
  args.length === 2 && [...args].every(n => isNumber(n))
);

export function sum (a, b) {
  if (isTwoValidNumbers(arguments)) {
    return a + b;
  } else {
    throw new Error('It should be 2 valid numbers');
  }
}

/*
  Напишите функцию, которая возвращает сумму всех чисел, что передаются параметрами
*/

export function sumAll (...args) {
  if (args.length < 2) throw new Error('Not valid arguments amount');
  if (args.some(n => !isNumber(n))) throw new Error('All arguments should be valid numbers');

  return args.reduce((acc, curr) => acc + curr, 0);
}
/*
  Напишите функцию, которая возвращает число x в степень n
*/
export function pow (x, n) {
  if (isTwoValidNumbers(arguments)) {
    return x ** n;
  } else {
    throw new Error('It should be 2 valid numbers');
  }
};

/*
  Напишите функцию, которая возвращает рандомное целое число от from до to
*/
export function random (from, to) {
  if (isTwoValidNumbers(arguments)) {
    return Math.floor(Math.random() * (to - from + 1)) + from
  } else {
    throw new Error('It should be 2 valid numbers');
  }
}

export default {
  sum,
  sumAll,
  pow,
  random,
};
