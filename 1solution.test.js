// const { multiplesOf3and5 } = require('./1solution');
import { multiplesOf3and5 } from "./1solution";

describe('#1 Solution', () => {
  test('multiplesOf3and5 below 10', () => {
    expect(multiplesOf3and5(10)).toBe(23)
  });

  test('multiplesOf3and5 below 1000', () => {
    expect(multiplesOf3and5(1000)).toBe(233168);
  });
});
