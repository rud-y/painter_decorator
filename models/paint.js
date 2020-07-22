const Paint = function (litres) {
    this.litres = litres;
};

Paint.prototype.isEmpty = function () {
    return this.litres === 0;
};

Paint.prototype.empty = function () {
    this.litres = 0;
}

Paint.prototype.reduce = function (volume) {
    this.litres -= volume;
};


module.exports = Paint;
