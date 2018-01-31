/*
  Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/

const getDataType = variable => typeof variable;
/*
  Напишите функцию, которая принимает 1 аргумент и возвращает:
  'primitive' если тип данных относится к примивным
  'primitive-special' если тип данных специальный
  'object' - если простой обьект
  'object-array' - если массив
  'object-function' - если функция
*/
const getDataTypePseudoName = variable => {
  let result = 'primitive';

  /* eslint-disable eqeqeq */
  if (variable == undefined) {
    result = 'primitive-special';
  } else if (Array.isArray(variable)) {
    result = 'object-array';
  } else if (typeof variable === 'function') {
    result = 'object-function';
  } else if (typeof varibale === 'object') {
    result = 'object';
  }

  return result;
};
/*
  Напишите функцию, которая принимает 2 аргумента,
  и возврвщает 1 если их значения и их типы равны,
  0 если равны только значения
  и -1 в другом случае
*/
const compareByType = (a, b) => {
  let result;

  if (a === b) {
    result = 1;
  } else if (a == b) {
    result = 0;
  } else {
    result = -1;
  }

  return result;
};

// Numbers
/*
  Напишите функцию, которая принимает 1 аргумент,
  и в случае если аргумент имеет числовой тип увеличивает его на 1
  и возврвщвет результат,
  в любом другом случае возврвщвет -1
*/
const increase = value => (
  typeof value === 'number' ? value + 1 : -1
);
/*
  Напишите функцию, которая принимает 1 аргумент(число),
  и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
*/
const testForSafeNumber = value => (
  Number.isFinite(value) && !Number.isNaN(value) ? 'safe' : 'danger'
);
// Strings
/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает массив из елементов строки разделенных по пробелу ' '
*/
const stringToArray = str => str.split(' ');
/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает часть этой строки до первой запятой
*/
const getStringPart = str => (
  str.slice(0, str.includes(',') ? str.indexOf(',') : str.length)
);
/*
  Напишите функцию, которая принимает 2 аргумента (строку и симовл),
  и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
  false в противоположном случае
*/
const isSingleSymbolMatch = (str, symbol) => {
  const index = str.indexOf(symbol);
  const result = index >= 0 && str.lastIndexOf(symbol) === index ? index : false;

  return result;
};
/*
  Напишите функцию, которая принимает 2 аргумента,
  массив в разделитель[опционально],
  и возвращает строку ввиде элементов массива c разделителями если разделитель задан
  или строку разделенную "-" если не задан
*/
const join = (array, separator) => array.join(separator || '-');
/*
  Напишите функцию, которая принимает 2 массива,
  и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
const glue = (arrA, arrB) => [...arrA, ...arrB];
/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой массив отсортированный от большего к меньшему
*/
const comparator = (a, b) => {
  let value = 0;

  if (a > b) value = -1;
  if (a < b) value = 1;

  return value;
};

const order = arr => arr.slice().sort(comparator);

/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой без чисел которые меньше 0
*/
const removeNegative = arr => arr.filter(number => number >= 0);
/*
  Напишите функцию, которая принимает 2 числовых массива,
  и возвращает новый массив, состоящий из элементов первого но без элементов
  которые присутствуют во втром
  [1,2,3], [1, 3] => [2]
*/
const without = (arrA, arrB) => arrA.filter(number => !arrB.includes(number));
/*
  Напишите функцию, которая принимает строку,
  содержащую выражение математической операции с двумя
  операндами (поддерживаются 4 базовых оператора + - / *).
  Функция вычисляет выражение и возвращает число либо NaN.
  '12/6' => 2
*/
const parseCalcExpression = expression => (
  expression
    .replace(/\s/g, '')
    .match(/^([-]?[a-zA-Z0-9.]+)([+-/*])([-]?[a-zA-Z0-9.]+)$/)
);
const getCalcFunctionByOperator = operator => ({
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
})[operator];

const calcExpression = expression => {
  const [, leftOperand, operator, rightOperand] = parseCalcExpression(expression);
  const calc = getCalcFunctionByOperator(operator);

  return calc(+leftOperand, +rightOperand);
};
/*
  Напишите функцию, которая принимает строку,
  содержащую выражение логической операции с двумя
  операндами (поддерживаются 5 базовых операторов > < = >= <=).
  Функция вычисляет выражение и возвращает true / false,
  либо бросает exception в случае ошибки.
  '100>5' => true
*/
const parseComparisonExpression = expression => (
  expression
    .replace(/\s/g, '')
    .match(/^([-]?[a-zA-Z0-9.]+)(<|>|>=|<=|=)([-]?[a-zA-Z0-9.]+)$/)
);
const getComparisonFunctionByOperator = operator => ({
  '>': (a, b) => a > b,
  '<': (a, b) => a < b,
  '=': (a, b) => a === b,
  '>=': (a, b) => a >= b,
  '<=': (a, b) => a <= b,
})[operator];

const calcComparison = expression => {
  const [, leftOperand, operator, rightOperand] = parseComparisonExpression(expression);

  /* eslint no-restricted-globals: ["error", "event"] */
  if (isNaN(leftOperand) || isNaN(rightOperand)) {
    throw new Error('Invalid type');
  }

  const compare = getComparisonFunctionByOperator(operator);

  return compare(+leftOperand, +rightOperand);
};
/*
  Напишите функцию, которая принимает обьект и строку,
  содержащую выражение доступа к свойствам обьекта.
  Функция возвращает значение запрашиваемого свойства либо
  бросает exception в случае ошибки.
  { a: { x: 2 }, b: 5 }, '.a.x' => 2
  { a: 1, b: 2 }, '.c' => exception
*/
const evalKey = (obj, expression) => {
  if (!expression.startsWith('.')) throw new Error('expression should start with .');
  const path = expression.slice(1).split('.');

  return path.reduce((obj, property) => {
    if (!obj[property]) throw new Error('Not found');

    return obj[property];
  }, obj);
};

export default {
  getDataType,
  getDataTypePseudoName,
  compareByType,
  increase,
  testForSafeNumber,
  stringToArray,
  getStringPart,
  isSingleSymbolMatch,
  join,
  glue,
  order,
  removeNegative,
  without,
  calcExpression,
  calcComparison,
  evalKey,
};
