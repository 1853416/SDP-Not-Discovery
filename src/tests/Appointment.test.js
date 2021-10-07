const Appointment = require('./Appointment');

describe("Appointment tests", () => {
    test("Find Doctor By Field",() => {
        var bool = Appointment.findDocByField("Dentist");
        var bool1 = Appointment.findDocByField("GP");
        expect(bool).toBeTruthy();
        expect(bool1).toBeFalsy();

        
    });

    test("Set Appointment Time",() => {
        expect(Appointment.setAppointmentTimeAvail("08:30",true)).toMatch("Success");
        expect(Appointment.setAppointmentTimeAvail("abc",true)).toMatch("Fail");
    });

})

