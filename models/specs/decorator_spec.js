const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");
const Room = require("../room");

describe("Decorator", function () {
    let decorator;
    let paint;
    let room;

    beforeEach( function () {
        decorator = new Decorator();
        paint = new Paint(50);
        room = new Room(60);
    });

    it("should start with an empty paint stock", function () {
        assert.deepStrictEqual([], decorator.stock);
    });

    it("should be able to add a paint can to stock", function () {
        decorator.addPaint(paint);
        assert.deepStrictEqual([paint], decorator.stock);
    })

    it("should be able to calculate total litres of paint in stock", function () {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        assert.strictEqual(100, decorator.totalStockVolume());
    });

    it("should be able to calculate wether it has enough paint to paint a room(not enough)", function() {
        assert.strictEqual(false, decorator.hasEnoughPaint(room));
    });

    it("should be able to calculate wether it has enough paint to paint a room(has enough)", function() {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        assert.strictEqual(true, decorator.hasEnoughPaint(room));
    });

    it("should be able to paint a room if it has enough paint", function () {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        decorator.paintRoom(room);
        assert.strictEqual(60, room.areaPainted);
    });

    // it("should be able to decrease the amount of paint in stock when painting room", function() {
    //     decorator.addPaint(paint);
    //     decorator.addPaint(paint);
    //     decorator.paintRoom(room);
    //     decorator.decreasePaintStock();
    //     assert.deepStrictEqual(40, decorator.totalStockVolume());
    // });

});
