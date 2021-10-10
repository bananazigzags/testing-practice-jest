const analyze = require("./analyze");

test('returns average of 4, min 1, max 8, and length 6 for array [1, 8, 3, 4, 2, 6', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});