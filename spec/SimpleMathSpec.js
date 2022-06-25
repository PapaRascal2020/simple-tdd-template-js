describe("SimpleMathTest", function() {
    it("We can add two numbers", function() {
        let a = 5;
        let b = 12;

        expect(17).toEqual(Addition(a, b));
    });

    it("we can multiply two numbers", function() {
        let a = 5;
        let b = 12;

        expect(60).toEqual(Multiply(a, b));

    });

    it("We can work our a number to the power of another", function() {
        let a = 5;
        let b = 12;

        expect(244140625).toEqual(Power(a, b));
    });

    it("We can subtract two numbers", function() {
        let a = 5;
        let b = 12;

        expect(-7).toEqual(Minus(a, b));
    });

    it("We can divide two numbers", function() {
        let a = 5;
        let b = 12;

        expect(0.4166666666666667).toEqual(Divide(a, b));
    });
});