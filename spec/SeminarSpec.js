var SeminarFactory = {
    create: function( parms ){
        var defParms = {name:'unknown class', price:500, taxFree:false};
        var values =  _.assign(defParms,parms);

        return Seminar.create( values);
    }

};


describe('Seminar', function () {
    it('should have a name', function () {
        var seminar = SeminarFactory.create({name: 'JavaScript-Basics'});
        expect(seminar.name()).toEqual('JavaScript-Basics');
    });
    it('should have a price', function () {
        var seminar = SeminarFactory.create({price:499.99});
        expect(seminar.netPrice()).toEqual(499.99);
    });
    it('should have a gross price that adds 20% VAT to the net price', function () {
        var seminar = SeminarFactory.create({price:100});
        expect(seminar.grossPrice()).toEqual(120);
    });



});

describe("A tax-free Seminar", function () {
    var seminar;
    
    beforeEach(function () {
        seminar = SeminarFactory.create({taxFree: true});
    });



    it('should be tax-free', function () {
      //  expect( seminar.isTaxFree()).toBeTruthy();


           expect(seminar).toBeTaxFree(true);
    });
    it('should have a gross price that matches the net price if it is tax free', function () {

        expect(seminar.grossPrice()).toEqual(seminar.netPrice());
    });

});

describe("A 3 letter Seminar", function () {
    var seminar;
    beforeEach(function () {
        seminar = SeminarFactory.create({name: "BDD"});
    });

    it('should have 3 letter discount granted', function () {
        // custom matcher can pass 2 parameters actual and expected
        // in this case we only pass actual
       expect(seminar).toHave3LetterDiscountGranted();
    });
    it('should give a discount of 5%', function () {
        expect(seminar.discountPercentage()).toEqual(5);
    });

    describe("that is priced $200", function () {
        beforeEach(function () {
            seminar = SeminarFactory.create({name: "BDD", price: 20});
        });
        it('should have a discount of $10', function () {
            expect(seminar.discount()).toEqual(10);
        });
    });
});

describe("A Seminar with a name of more than 3 letters", function () {
    var seminar;
    beforeEach(function () {
        seminar = SeminarFactory.create({name: "JavaScript-Basics"});
    });

    it('should not have a 3 letter discount granted', function () {

        expect(seminar).not.toHave3LetterDiscountGranted();
    });
    it('should have a discount of 0%', function () {
        expect(seminar.discountPercentage()).toEqual(0);
    });

});