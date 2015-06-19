/* globals jasmine seminar */
beforeEach(function () {
    jasmine.addMatchers({
        toBeTaxFree: function () {
            /* FIX-ME: not working debug Player/Song example given by jasmine */

            return {
                compare: function (actual, expected) {
                    var result = {};
                    // jasmine.Expectation().toBeTruthy();
                    result.pass = (actual.isTaxFree() == expected);
                    return result;

                }
            };


        } ,

        toHave3LetterDiscountGranted: function (){

            return {
                compare: function( actual,expected) {
                    var result ={};

                    if ((actual == undefined ) ) {
                        result.pass = false;
                        result.message = "Expected the seminar '" + actual.name() + "' to " + "return 'true' on #have3LetterDiscountGranted but got '" + actual.have3LetterDiscountGranted() + "'";
                    }
                    else {

                        result.pass = actual.have3LetterDiscountGranted();
                    }

                    return  result;
                }

        };
    }

});
});

