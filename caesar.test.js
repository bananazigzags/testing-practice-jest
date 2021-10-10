const caesar = require("./caesar");

test('Keeps the case and punctuation', () => {
    expect(caesar("Attack at dawn!", 8)).toBe("Ibbiks ib liev!");
});