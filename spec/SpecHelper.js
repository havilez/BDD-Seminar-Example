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


    },

      toHave3LetterDiscountGranted: function() {

          return {

              this.message = function () {

            return  "Expected the seminar '" + this.Seminar.name() + "' to " + "return 'true' on #have3LetterDiscountGranted but got '" + this.Seminar.have3LetterDiscountGranted() + "'";
          };


          return this.Seminar.have3LetterDiscountGranted();
          /*
           var result = {};
           return this.Seminar.have3LetterDiscountGranted();
           */
      }
  }


  });
});
