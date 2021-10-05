const validEmail = {
    validString: function(email,str){
        var count = (email.match(str) || []).length;
        
        if(count == 1){
            return true;
        }
        else{
            return false;
        }
    }
}
module.exports = validEmail