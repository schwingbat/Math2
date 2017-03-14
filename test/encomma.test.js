const Math2 = require("../Math2.js");

describe("Math2.encomma", () => {
    it("should add commas to a number", () => {
        expect(Math2.encomma(1000000)).toBe("1,000,000");
    });

    it("should properly handle decimals", () => {
        expect(Math2.encomma(512221.151)).toBe("512,221.151");
    });

    it("should work even if the number passed was already a string", () => {
        expect(Math2.encomma("590100000")).toBe("590,100,000");
    });

    it("should handle strings with commas already included", () => {
        expect(Math2.encomma("1000,10,5000")).toBe("1,000,105,000");
    });

    it("should ??? if the number has multiple decimal points", () => {
        // Honestly, this is not valid. I just want to make sure it does what I think it should.
        // It'll cut off subsequent decimal stuff.
        expect(Math2.encomma("52206.12.152")).toBe("52,206.12");
    });

    it("should use a provided delimiter", () => {
        expect(Math2.encomma(1000000, ".")).toBe("1.000.000");
        expect(Math2.encomma(123456789, "$")).toBe("123$456$789");
    });

    it("should make currency display awesome", () => {
        const amount = 232 * Math2.decomma("1,000,000") / 100;

        expect("$" + Math2.encomma(amount)).toBe("$2,320,000");
    });
});