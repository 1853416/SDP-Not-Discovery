const Appointment = {
    findDocByField: function(field) {
       var docFields = ["General Surgeon","Dentist","General Practioner"];

       for(var i = 0; i < docFields.length; ++i){
            if(field == docFields[i]){
                return true;
            }
       }

       return false;
    },
    setAppointmentTimeAvail: function(time,avail){
        var fields = time.split(':');
        if(/^\d+$/.test(fields[0]) && /^\d+$/.test(fields[1])){
           
            return "Success";
        }
        else{
            return "Fail";
        }

    }
}
module.exports = Appointment