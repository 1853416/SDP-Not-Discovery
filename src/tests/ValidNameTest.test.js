const validName = require('../lib/ValidName');

describe("Name tests", () => {
    test("valid name",() => {
        var name = "Peter";
        var bool = validName.validName(name);

        expect(bool).toBeTruthy();

        name = "Ty789";
        bool = validName.validName(name);

        expect(bool).toBeFalsy();

        name = "";
        bool = validName.validName(name);

        expect(bool).toBeFalsy();
    });
})
