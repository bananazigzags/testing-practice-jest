const capitalize = require("./capitalize");

test('привет => Привет', () => {
    expect(capitalize("привет")).toBe("Привет");
});
