const validNumber = {
    validNum: function(num){
        var bool =  /^\d+$/.test(num);
        
        if(bool == true && num.length == 10){
            return true;
        }
        else{
            return false;
        }
    }
}
module.exports = validNumber