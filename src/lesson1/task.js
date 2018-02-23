/*
  Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/

function checkOneArgument (args) {
  if (args.length !== 1) throw new Error('It should be one argument');
  return true;

function checkOneStrArgument (args) {
  if (args.length !== 1 || args[0] !== 'string') {
    throw new Error ('It shoud be one string argument');
  }

  return true;
}

function checkOneArrayArgument (args) {
  if (args.length !== 1 || Array.isArray(args[0])) {
    throw new Error ('It shoud be one array argument');
  }

  return true;
}

function checkTwoArguments (args) {
  if (args.length !== 2) throw new Error('It should be two arguments');
  return true;
}

function getDataType (variable) {
  checkOneArgument(arguments);
  return typeof variable;
}
/*
  Напишите функцию, которая принимает 1 аргумент и возвращает:
  'primitive' если тип данных относится к примивным
  'primitive-special' если тип данных специальный
  'object' - если простой обьект
  'object-array' - если массив
  'object-function' - если функция
*/
function getDataTypePseudoName (variable) {
  checkOneArgument(arguments);
  let result = 'primitive';

  /* eslint-disable eqeqeq */
  if (variable == undefined) {
    result = 'primitive-special';
  } else if (Array.isArray(variable)) {
    result = 'object-array';
  } else if (typeof variable === 'function') {
    result = 'object-function';
  } else if (typeof variable === 'object') {
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
function compareByType (a, b) {
  checkTwoArguments(arguments);
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
function increase (value) {
  checkOneArgument(arguments);
  return typeof value === 'number' ? ++value : -1
}
/*
  Напишите функцию, которая принимает 1 аргумент(число),
  и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
*/
function testForSafeNumber (value) {
  checkOneArgument(arguments);
  return Number.isFinite(value) && !Number.isNaN(value) ? 'safe' : 'danger'
}
// Strings
/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray (str) {
  checkOneArgument(arguments);
  return str.split(' ');
}
/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает часть этой строки до первой запятой
*/
function getStringPart (str) {
  checkOneStrArgument(arguments);
  return str.slice(0, str.includes(',') ? str.indexOf(',') : str.length);
};
/*
  Напишите функцию, которая принимает 2 аргумента (строку и симовл),
  и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
  false в противоположном случае
*/
function isSingleSymbolMatch (str, symbol) {
  checkTwoArguments(arguments);
  if (typeof str !== 'string' || typeof symbol !== 'string') {
    throw new Error('It should be two string arguments');
  }

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
function join (array, separator) {
  checkTwoArguments(arguments);
  if (Array.isArray(array) && typeof separator === 'string') {
    return array.join(separator || '-');
  } else {
    throw new Error('Invalid data type');
  }
}
/*
  Напишите функцию, которая принимает 2 массива,
  и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue (arrA, arrB) {
  checkTwoArguments(arguments);
  if (Array.isArray(arrA) && Array.isArray(arrB)) {
    return [...arrA, ...arrB];
  } else {
    throw new Error('It should be two arrays');
  }
} 
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

function order (arr) {
  checkOneArrayArgument(arguments);
  return arr.slice().sort(comparator);
}

/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой без чисел которые меньше 0
*/
function removeNegative (arr) {
  checkOneArrayArgument(arguments);
  return arr.filter(number => number >= 0);
}
/*
  Напишите функцию, которая принимает 2 числовых массива,
  и возвращает новый массив, состоящий из элементов первого но без элементов
  которые присутствуют во втром
  [1,2,3], [1, 3] => [2]
*/
const without = (arrA, arrB) => {
  if (glue(arrA, arrB).every(i => typeof i === 'number')) {
    return arrA.filter(number => !arrB.includes(number));
  } else {
    throw new Error('It should be all numbers');
  }
}
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
