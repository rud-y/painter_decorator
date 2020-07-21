const assert = require("assert")
const Room = require("../room")

describe("Room", function () {
    let room;

    beforeEach(function () {
        room = new Room(25);
    });
    
    it("should have an area in square meters", function () {
        assert.strictEqual(25, room.area);
    });

    it("should start not painted", function () {
        assert.strictEqual(0, room.areaPainted);
    });

    it("should be able to be painted", function () {
        room.paint(5);
        assert.strictEqual(5, room.areaPainted);
    });
});
