const calculator = require("./calculator");

test('adds 4 and 8 to equal 12', () => {
    expect(calculator.add(4, 8)).toBe(12);
});

test('subtracts 5 from 64 to equal 59', () => {
    expect(calculator.subtract(64, 5)).toBe(59);
});

test('multiplies -4 and 1 to equal -4', () => {
    expect(calculator.multiply(-4, 1)).toBe(-4);
});

test('divides 100 by 10 to equal 10', () => {
    expect(calculator.divide(100, 10)).toBe(10);
});
