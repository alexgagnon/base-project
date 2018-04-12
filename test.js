// @flow

esLint;

function checkFlow(a: number, b: string): number {
  return a + b;
}

checkFlow('error', 'fine');
