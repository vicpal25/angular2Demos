var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        this.visible = false;
        http.get('http://0.0.0.0:3100/api/products').toRx().map(function (res) { return res.json(); }).subscribe(function (result) { return _this.result = result; });
    }
    Cart.prototype.productlinechanged = function () {
        console.log("triggered");
    };
    Cart.prototype.addProduct = function (name, product_id, dsc, price, image, id) {
        var headers = new angular2_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://0.0.0.0:3100/api/products', JSON.stringify(new item_1.Item(name, product_id, dsc, price, image, id, true)), {
            headers: headers
        })
            .toRx()
            .map(function (res) { return res.json(); });
        this.visible = true;
    };
    Cart = __decorate([
        angular2_1.Component({
            selector: 'item-list'
        }),
        angular2_1.View({
            templateUrl: './components/cart/cart.html',
            directives: [angular2_1.NgFor, angular2_1.CSSClass]
        }), 
        __metadata('design:paramtypes', [angular2_1.Http])
    ], Cart);
    return Cart;
})();
exports.Cart = Cart;
