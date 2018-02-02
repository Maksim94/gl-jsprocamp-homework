/*
  Write a function, that has 2 required parameters, and any amount of optional parameters. 
  Function should return a number - amount of optional parameters that were passed into function.
  Hint: you are allowed to modify both function definition and function body.
*/
/* eslint func-names: ["error", "never"] */

export const countOptional = (first, second, ...args) => args.length;

/*
  Write your implementation of native Function.prototype.bind method
*/
// export const bindContext = (fn, context, ...outerArgs) => (...args) => (
//   fn.apply(context, [...outerArgs, ...args])
// );

export function bindContext(fn, context, ...outerArgs) {
  return function (...args) {
    return fn.apply(context, [...outerArgs, ...args]);
  };
}

/*
  Write function that accepts 1 parameter - object. It should add to this object a log interface so as:
  const named = {name: 'Allen'}
  addLogCapability(named);
  named.log() // Log message #5: my name is Allen

  const unnamed = {msg: 'some text'}
  addLogCapability(unnamed);
  unnamed.log() // Log message #8: I dont have name
  unnamed.log() // Log message #9: I dont have name
  unnamed.log() // Log message #10: I dont have name

  Take to account, that you should track log call index starting from 1
*/
export function addLogCapability(object) {
  let counter = 0;

  object.log = function () {
    counter += 1;

    const logMessage = `Log message #${counter}`;
    const nameMessage = object.name ? `my name is ${object.name}` : 'I dont have name';

    return `${logMessage}: ${nameMessage}`;
  };
}

/*
  Write a function that creates custom topic logger:
  myLogger = logger('My Topic')
  myLogger('first message'); //=> My Topic: first message
*/
// export const logger = topic => message => `${topic}: ${message}`;

export function logger(topic) {
  return function (message) {
    return `${topic}: ${message}`;
  };
}

/*
  Implement left to right compose function
*/

// Actually it's pipe, not compose
/* Compose looks like (from right to left):
  const compose = (...fns) => x => fns.reduceRight((f, g) => g(f), x);
*/
// export const compose = (...fns) => x => fns.reduce((f, g) => g(f), x);

export function compose(...fns) {
  return function (initial) {
    return fns.reduce((f, g) => g(f), initial);
  };
}

/*
  Implement function that can turn function into partial application
  function sum(a, b) {
    return a+b;
  }

  const partialSum = partial(sum);
  const sumWith4 = partialSum(4);
  sumWith4(5) // 9
*/
// export const partial = fn => (...args) => fn.bind(null, ...args);

export function partial(fn) {
  return function (...args) {
    return fn.bind(null, ...args);
  };
}

export default {
  countOptional,
  bindContext,
  addLogCapability,
  logger,
  compose,
  partial,
};
