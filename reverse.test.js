const reverse = require('./reverse');

test('привет => тевирп', () => {
    expect(reverse("привет")).toBe("тевирп");
});