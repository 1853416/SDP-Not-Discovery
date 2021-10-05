const ValidIDNumber = require('../lib/ValidIDNumber');

describe("ID tests", () => {
    test("valid id",() => {
        var idNum = "9911290195083";
        var bool = ValidIDNumber.validNum(idNum);

        expect(bool).toBeTruthy();

        idNum = "9911290195083abc";
        bool = ValidIDNumber.validNum(idNum);

        expect(bool).toBeFalsy();
    });
})
