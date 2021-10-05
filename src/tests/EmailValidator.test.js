const EmailValidator = require('../lib/EmailValidator');

describe("Email tests", () => {
    test("valid email",() => {
        var email = "abc@example.com"
        var bool = EmailValidator.validString(email,/@/g);
        var bool1 = EmailValidator.validString(email,/.com/g);

        expect(bool).toBeTruthy();
        expect(bool1).toBeTruthy();

        var email2 = "abc@example.co.za"
        var bool2 = EmailValidator.validString(email2,/@@/g);
        var bool3 = EmailValidator.validString(email2,/.co.za/g);

        expect(bool3).toBeTruthy();
        expect(bool2).toBeFalsy();

    });
})
