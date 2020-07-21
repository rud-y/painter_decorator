const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");

describe("Decorator", function () {
    let decorator;
    let paint;

    beforeEach( function () {
        decorator = new Decorator();
        paint = new Paint(50);
    });

    it("should start with an empty paint stock", function () {
        assert.deepStrictEqual([], decorator.stock);
    });

    it("should be able to add a paint can to stock", function () {
        decorator.addPaint(paint);
        assert.deepStrictEqual([paint], decorator.stock);
    })
});
