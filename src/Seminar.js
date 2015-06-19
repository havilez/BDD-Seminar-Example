var VAT_RATE = 1.2;

var Seminar = {
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
     return true;
    }

};