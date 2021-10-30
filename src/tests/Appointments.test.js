const Appointments = require('./Appointments');

describe("Appointments tests", () => {
    var arrApp = [];
    test("Make/Cancel Appointment",() => {

        var bool = Appointments.makeAppointment("Pineapple","Pen",arrApp);
        expect(bool).toBeTruthy();
        var bool1 = Appointments.cancelAppointment("Pineapple",arrApp);
        expect(bool1).toBeTruthy();
    });

})

