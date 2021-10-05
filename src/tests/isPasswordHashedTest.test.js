const isPasswordHashed = require('../lib/isPasswordHashed');

describe("Password tests", () => {
    test("encrypt decrypt pass",() => {
        var pass = "BlueBird";
        var encryptPass1 = isPasswordHashed.encryptPass(pass);

        expect(encryptPass1).not.toMatch(pass);

        var decryptPass1 = isPasswordHashed.decryptPass(encryptPass1);

        expect(decryptPass1).toMatch(pass);
    });
})
