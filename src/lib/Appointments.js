const Appointments = {
    makeAppointment: function(doctor,patient,arrApp){
        var app = doctor + "#" + patient;
        ;

        if(arrApp.push(app) > 0){
            return true;
        }
        else{
            return false;
        }
    },

    cancelAppointment: function(doctor,arrApp){
        for(var i = 0; i < arrApp.length; ++i){
            const doc = arrApp[i].split("#");
            if(doc[0] === doctor){
                arrApp.splice(i, 1); 
                break;
            }
        }

        if(arrApp.length == 0){
            return true;
        }
        else{
            return false;
        }

    }
        
}
module.exports = Appointments