const capitalize = require("./capitalize");
test("Capitalize", () => {
  expect(capitalize("daniel")).toBe("Daniel");
});

const reverseString = require("./reverseString");
test("Reverse String", () => {
  expect(reverseString("abc")).toBe("cba");
});

const calculator = require("./calculator");
test("Add", () => {
  expect(calculator.add(3, 2)).toBe(5);
});
test("Subtract", () => {
  expect(calculator.subtract(7, 4)).toBe(3);
});
test("Multiply", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});
test("Divide", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

const analyzeArray = require("./analyzeArray");
const { default: expect } = require("expect");
test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
