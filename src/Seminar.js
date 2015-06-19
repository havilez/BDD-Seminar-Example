var VAT_RATE = 1.2;

var Seminar = {
    DISCOUNT_PERCENTAGE: 5,
    create: function(parms) {
        return Object.create(Seminar).init(parms.name, parms.price,parms.taxFree);
    },
    init: function(name,price,taxFree){
        this._name = name;
        this._price = price;
        this._taxFree = taxFree;
        return this;
    },
    name: function() {
        return (this._name);
    },
    netPrice: function(){
        return this._price;
    },
    grossPrice: function(){
        return this.netPrice() *(this.isTaxFree() ? 1 : VAT_RATE);
    },
    isTaxFree: function () {
        return this._taxFree;
    },
    have3LetterDiscountGranted: function(){
     return this._name.length <= 3;
    },
    discountPercentage: function() {
        return this.have3LetterDiscountGranted() ? this.DISCOUNT_PERCENTAGE : 0;
    },
    discount: function() {
        if ( this.isTaxFree())
            return this._price * this.DISCOUNT_PERCENTAGE;
        else {
            return this._price * 0;
        }


    }

};