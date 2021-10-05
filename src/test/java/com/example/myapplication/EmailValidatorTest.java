package com.example.myapplication;


import com.google.common.truth.Truth;

import org.junit.Test;

public class EmailValidatorTest {
    @Test
    public void emailValidator_CorrectEmailSimple_ReturnsTrue() {
        EmailValidator emailValidator = new EmailValidator();
        Truth.assertThat(emailValidator.isEmailValid("name@email.com")).isTrue();
    }

}
