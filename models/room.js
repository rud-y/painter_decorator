const Room = function (area) {
    this.area = area;
    this.areaPainted = 0;
};

Room.prototype.paint = function (area) {
    this.areaPainted += area;
};

module.exports = Room;
