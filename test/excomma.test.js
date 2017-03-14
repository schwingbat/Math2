const Math2 = require("../Math2.js");

describe("Math2.excomma", () => {
    it("should remove commas and return a number", () => {
        expect(Math2.excomma("1,000,000")).toBe(1000000);
    });
});