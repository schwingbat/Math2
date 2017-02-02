const Math2 = require("../Math2.js");

describe("Math2.range", () => {
    it("should generate a number between the two bounds", () => {
        const low = 5;
        const high = 10;
        const val = Math2.range(low, high);

        expect(val).toBeLessThanOrEqual(high);
        expect(val).toBeGreaterThanOrEqual(low);
    });

    it("should round if round parameter is set to true", () => {
        const low = 1;
        const high = 92;
        const val = Math2.range(low, high, true);

        expect(val % 1).toBe(0);
    });
});