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
});
