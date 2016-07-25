var app = require('../js/script.js');


describe("app", function() {
  
  it("pow()", function() {
        var result;
        result = app.pow(3, 3);
        expect(result).toEqual(27);
    });
    it("pow()", function() {
        var result;
        result = app.pow(8, 11);
        expect(result).toEqual(8589934592);
    });
    it("pow()", function() {
        var result;
        result = app.pow(7, 7);
        expect(result).toEqual(823543);
    });
    it("pow()", function() {
        var result;
        result = app.pow(4, 2);
        expect(result).toEqual(16);
    });
});
