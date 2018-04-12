// @flow

const checkLint = 'Hello';

const obj = {checkLint};

console.log(obj);

function add(a: number, b: number): number {
  return a + b;
}

add(1, 1);

module.exports = {add};
