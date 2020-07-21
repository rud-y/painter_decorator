const Decorator = function () {
    this.stock = [];
};

Decorator.prototype.addPaint = function (paint) {
    this.stock.push(paint);
};

Decorator.prototype.totalStockVolume = function () {
    let result = 0;
    for (const paint of this.stock) {
        result += paint.litres;
    }
    return result;
};

module.exports = Decorator;
