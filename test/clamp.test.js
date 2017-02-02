const Math2 = require("../Math2.js");

describe("Math2.clamp", () => {
    it("should clamp numbers to the higher bound", () => {
        expect(Math2.clamp(16, 0, 10)).toBe(10);
    });

    it("should clamp numbers to the lower bound", () => {
        expect(Math2.clamp(2, 5, 10)).toBe(5);
    });
});