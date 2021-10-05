const validID = {
    validNum: function(id){
        var bool =  /^\d+$/.test(id);
        
        if(bool == true && id.length == 13){
            return true;
        }
        else{
            return false;
        }
    }
}
module.exports = validID