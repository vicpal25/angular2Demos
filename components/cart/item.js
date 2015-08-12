var Item = (function () {
    function Item(name, product_id, dsc, price, image, id) {
        this.name = name;
        this.product_id = product_id;
        this.dsc = dsc;
        this.price = price;
        this.image = image;
        this.id = id;
    }
    return Item;
})();
exports.Item = Item;
