import lesson2 from '../src/lesson2';

const {
  sum, sumAll, pow, random
} = lesson2.task;

describe('sum function', () => {
  test('sum works good', () => {
    expect(sum(3, 4)).toBe(7);
  });
  test('sum with string works bad', () => {
    expect(() => sum(3, '4')).toThrow();
  });
  test('sum with one arg works bad', () => {
    expect(() => sum(3)).toThrow();
  });
  test('sum works bad with NaN', () => {
    expect(() => sum(NaN, 3)).toThrow();
  });
});


describe('sumAll function', () => {
  test('sumAll works good', () => {
    expect(sumAll(4, 3, 6)).toBe(13);
  });
  test('sumAll works bad with String', () => {
    expect(() => sumAll(3, '4')).toThrow();
  });
  test('sumAll works bad with one arg', () => {
    expect(() => sumAll(3)).toThrow();
  });
  test('sumAll works bad with NaN', () => {
    expect(() => sumAll(4, NaN, 6)).toThrow();
  });
  test('sumAll works bad with str', () => {
    expect(() => sumAll(4, '8', 6)).toThrow();
  });
});


describe('pow function', () => {
  test('pow works good', () => {
    expect(pow(2, 3)).toBe(8);
  });
  test('pow with string works bad', () => {
    expect(() => pow(3, '4')).toThrow();
  });
  test('pow with one arg works bad', () => {
    expect(() => pow(3)).toThrow()
  });
  test('pow with NaN works bad', () => {
    expect(() => pow(NaN, 3)).toThrow()
  });
});

describe('random function', () => {
  test('random works good', () => {
    const randomNumber = random(3, 10);
    expect(randomNumber).toBeGreaterThanOrEqual(3);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });
});
