
$(document).ready(function () {

    /*Notice that every parameter should be written in English*/

    /*First name validation*/
    $("#first-name").blur(function () {
        if ($(this).val() !== ' ') {
            var pattern = /^[a-zA-Z-]{3,16}$/;
            if (pattern.test($(this).val())) {
                $(this).css({'border': '1px solid #569b44'});
                $('#valid-first-name').text('Valid');
            } else {
                $(this).css({'border': '1px solid #ff0000'});
                $('#valid-first-name').text('Input First name from 3 to 16 symbols');
            }
        }
    });

    /*Second name validation*/
    $("#second-name").blur(function () {
        if ($(this).val() !== ' ') {
            var pattern = /^[a-zA-Z-]{3,16}$/;
            if (pattern.test($(this).val())) {
                $(this).css({'border': '1px solid #569b44'});
                $('#valid-second-name').text('Valid');
            } else {
                $(this).css({'border': '1px solid #ff0000'});
                $('#valid-second-name').text('Input Second name from 3 to 16 symbols');
            }
        }
    });





    /*Login validation*/
    $(".login").blur(function () {
        if ($(this).val() !== ' ') {
            var pattern = /^[a-z0-9_-]{3,16}$/;
            if (pattern.test($(this).val())) {
                $(this).css({'border': '1px solid #569b44'});
                $('#valid-login').hide();
            } else {
                $(this).css({'border': '1px solid #ff0000'});
                $('#valid-login').text('Login should be from 3 to 16 symbols');
            }
        }
    });

    /*Password validation*/
    $(".password").blur(function () {
        if ($(this).val() !== ' ') {
            var pattern = /^[a-z0-9_-]{6,18}$/;
            if (pattern.test($(this).val())) {
                $(this).css({'border': '1px solid #569b44'});
                $('#valid-password').hide();
            } else {
                $(this).css({'border': '1px solid #ff0000'});
                $('#valid-password').text('Password should be from 3 to 16 symbols');
            }
        }
    });
});