const hashPassword = {
    encryptPass: function(str){
    /*
    * @AES is considered a victor of 15 compared ciphers in a 5-year evaluation process.
    * This ciphertext is currently considered a U.S Federal Information Processing Standard
    * (FIPS).
    */
    const CryptoJS = require('crypto-js');

    const encrypted = CryptoJS.AES.encrypt(str, "test");
    return encrypted.toString();
    },

    decryptPass: function(str){
        const CryptoJS = require('crypto-js');

        const decrypted = CryptoJS.AES.decrypt(str, "test").toString(CryptoJS.enc.Utf8);
        return decrypted;
    }
}
module.exports = hashPassword