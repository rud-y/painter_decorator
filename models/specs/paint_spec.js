const assert = require("assert")
const Paint = require("../paint")

describe('Paint', function() {
    let paint;

    beforeEach(function () {
        paint = new Paint(10);
    });
    
    it('should have a number of litres of paint', function(){
        assert.strictEqual(10, paint.litres);
    });

});
