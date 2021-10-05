package com.example.myapplication;

import com.google.common.truth.Truth;

import org.junit.Test;

public class ValidNameTest {
    ValidName validName = new ValidName();
    @Test
    public void validName_test(){
        Truth.assertThat(validName.isNameValid("Thomas")).isTrue();
        Truth.assertThat(validName.isNameValid("Thomas123")).isFalse();
    }
    @Test
    public void twoNames_test(){
        Truth.assertThat(validName.validTwoNames("Thomas James")).isTrue();
        Truth.assertThat(validName.validTwoNames("Thomas 123")).isFalse();
    }
}
