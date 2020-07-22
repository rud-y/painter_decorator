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

Decorator.prototype.hasEnoughPaint = function (room) {
    return this.totalStockVolume() >= room.area;
};

Decorator.prototype.paintRoom = function (room) {
    if (this.hasEnoughPaint(room)) {
        room.paint(room.area);
    }
};

Decorator.prototype.decreasePaintStock = function () {
    this.paintRoom(room);
    this.totalStockVolume();
};





module.exports = Decorator;
