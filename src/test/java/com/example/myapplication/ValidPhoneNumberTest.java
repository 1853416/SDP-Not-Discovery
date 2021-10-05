package com.example.myapplication;

import com.google.common.truth.Truth;

import org.junit.Test;

public class ValidPhoneNumberTest {
    @Test
    public void validPhoneNumber_test(){
        ValidPhoneNumber validPhoneNumber = new ValidPhoneNumber();
        Truth.assertThat(validPhoneNumber.isPhoneNumValid("0824630844")).isTrue();
        Truth.assertThat(validPhoneNumber.isPhoneNumValid("sat6666666666666")).isFalse();
    }
}
