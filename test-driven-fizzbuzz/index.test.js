const fizzBuzz = require("./index");

describe("fizzBuzz()", () => {
    it('returns "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
        expect(fizzBuzz(30)).toBe("FizzBuzz");
    });

    it("returns the given number for multiples of neither 3 nor 5", () => {
        expect(fizzBuzz(1)).toBe("1");
        expect(fizzBuzz(22)).toBe("22");
    });

    it('returns "Fizz" for mutiples of 3', () => {
        expect(fizzBuzz(33)).toBe("Fizz");
        expect(fizzBuzz(9)).toBe("Fizz");
    });
    it('returns "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(95)).toBe("Buzz");
        expect(fizzBuzz(65)).toBe("Buzz");
    });
});
