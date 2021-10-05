const validName = {
    validName: function(name){
        var bool =  /^[a-zA-Z]+$/.test(name);
        
        if(bool == true && name.length > 1){
            return true;
        }
        else{
            return false;
        }
    }
}
module.exports = validName