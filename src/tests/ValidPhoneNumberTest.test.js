const validPhoneNumber = require('./ValidPhoneNumber');

describe("Phone Num tests", () => {
    test("valid number",() => {
        var phoneNum = "0832503218";
        var bool = validPhoneNumber.validNum(phoneNum);

        expect(bool).toBeTruthy();

        phoneNum = "99abc";
        bool = validPhoneNumber.validNum(phoneNum);

        expect(bool).toBeFalsy();
    });
})