package com.example.myapplication;

import com.google.common.truth.Truth;

import org.junit.Test;

public class ValidIDNumberTest {
    @Test
    public void validID_test() {
        ValidIDNumber validIDNumber = new ValidIDNumber();
        Truth.assertThat(validIDNumber.isIDValid("9911290195083")).isTrue();
        Truth.assertThat(validIDNumber.isIDValid("abc01")).isFalse();
    }
}
