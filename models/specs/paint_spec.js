const assert = require("assert")
const Paint = require("../paint")

describe('Paint', function() {
    let paint;
    let paint2;

    beforeEach(function () {
        paint = new Paint(10);
        paint2 = new Paint(0);
    });
    
    it('should have a number of litres of paint', function(){
        assert.strictEqual(10, paint.litres);
    });

    it('should be able to check if it is empty (not empty)', function () {
        assert.strictEqual(false, paint.isEmpty());
    });

    it('should be able to check if it is empty (is empty)', function () {
        assert.strictEqual(true, paint2.isEmpty());
    });
});
