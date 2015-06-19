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
       expect(seminar).toHave3LetterDiscountGranted();
    });
});