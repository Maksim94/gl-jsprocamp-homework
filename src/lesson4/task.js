/*
  Write a function that creates custom set object. Function
  accepts single optional parameter (array) do define initial
  set content.
  Set should have add(), has(), delete(), forEach(), clear() methods
  and size property. Should not use es6 objects Set, WeakSet,
  but work in similar way. Set should preserve addition order
  in forEach() method.
  mySet = createSet(['a', 'b', 'c'])
*/
const initSet = arr => (
  arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, [])
);

export const createSet = arr => (function iife(arr = []) {
  const collection = initSet(arr);

  return {
    add(value) {
      if (!this.has(value)) {
        collection.push(value);
      }

      return this;
    },
    has(value) {
      return collection.includes(value);
    },
    delete(value) {
      let res;

      if (this.has(value)) {
        const index = collection.findIndex(entry => entry === value);
        collection.splice(index, 1);
        res = true;
      } else {
        res = false;
      }

      return res;
    },
    forEach(fn) {
      return collection.forEach(v => fn(v, v, collection.slice()));
    },
    entries() {
      return this[Symbol.iterator]();
    },
    keys() {
      return this.values();
    },
    values() {
      return collection.slice();
    },
    clear() {
      collection.length = 0;
    },
    get size() {
      return collection.length;
    },
    [Symbol.iterator]() {
      return collection.entries();
    },
    toString() {
      return '[object Set]';
    }
  };
}(arr));
/*
  Write a function that creates custom map object. Function
  accepts single optional parameter (array) do define initial
  map content.
  Map should have set(), get(), has(), delete(), forEach(), clear()
  methods and size property. Should not use es6 objects Map, WeakMap,
  but work in similar way. Map should preserve addition order
  in forEach() method.
  myMap = createMap([['a', 1], ['b', 2], ['c', 3]])
*/
const initMap = arr => {
  const notArray = arr.find(item => !Array.isArray(item));
  if (notArray) throw TypeError(`Iterator value ${notArray} is not an entry object`);

  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr[0])) acc.push(curr);
    return acc;
  }, []);
};
export const createMap = arr => (function iife(arr = []) {
  const collection = initMap(arr);

  return {
    get(key) {
      return collection.find(entry => entry[0] === key);
    },
    set(key, value) {
      const index = collection.findIndex(entry => entry[0] === key);
      if (index >= 0) {
        collection.splice(index, 1, value);
      } else {
        collection.push([key, value]);
      }

      return this;
    },
    has(key) {
      return collection.some(entry => entry[0] === key);
    },
    delete(key) {
      let res;

      if (this.has(key)) {
        const index = collection.findIndex(entry => entry[0] === key);
        collection.splice(index, 1);
        res = true;
      } else {
        res = false;
      }

      return res;
    },
    clear() {
      collection.length = 0;
    },
    forEach(fn) {
      return [...this.entries()].forEach(entry => fn(entry[1], entry[0], collection.slice()));
    },
    entries() {
      return this[Symbol.iterator]();
    },
    keys() {
      return collection.map(entry => entry[0]);
    },
    values() {
      return collection.map(entry => entry[1]);
    },
    get size() {
      return collection.length;
    },
    [Symbol.iterator]() {
      return collection[Symbol.iterator]();
    },
    toString() {
      return '[object Map]';
    },
  };
}(arr));

export default {
  createSet,
  createMap,
};
