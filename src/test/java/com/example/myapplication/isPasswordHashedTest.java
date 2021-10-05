package com.example.myapplication;

import com.google.common.truth.Truth;

import org.junit.Test;

public class isPasswordHashedTest {
    @Test
    public void encryptPass_test() throws Exception {
        isPasswordHashed isPasswordHashed = new isPasswordHashed();
        Truth.assertThat(isPasswordHashed.isHashed(isPasswordHashed.hashPass("Tangerines123"),"Tangerines123")).isTrue();
        Truth.assertThat(isPasswordHashed.isHashed("Tangerines123","Tangerines123")).isFalse();
    }

    @Test
    public void decryptPass_test() throws Exception{
        isPasswordHashed isPasswordHashed = new isPasswordHashed();
        Truth.assertThat(isPasswordHashed.isDecrypted(isPasswordHashed.hashPass("PineappleApplePen345"),"PineappleApplePen345")).isTrue();
        Truth.assertThat(isPasswordHashed.isDecrypted(isPasswordHashed.hashPass("PineappleApplePen345"),"PineappleApplePen")).isFalse();
    }
}
