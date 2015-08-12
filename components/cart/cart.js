var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var item_1 = require('./item');
var Cart = (function () {
    function Cart(http) {
        var _this = this;
        this.http = http;
        this.items = [];
        http.get('http://0.0.0.0:3000/api/products').toRx().map(function (res) { return res.json(); }).subscribe(function (result) { return _this.result = result; });
    }
    Cart.prototype.addProduct = function (name, product_id, dsc, price, image, id) {
        return this.http.post('http://0.0.0.0:3000/api/products', JSON.stringify(new item_1.Item(name, product_id, dsc, price, image, id))).toRx().map(function (res) { return res.json(); });
    };
    Cart = __decorate([
        angular2_1.Component({
            selector: 'item-list'
        }),
        angular2_1.View({
            templateUrl: './components/cart/cart.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [angular2_1.Http])
    ], Cart);
    return Cart;
})();
exports.Cart = Cart;
