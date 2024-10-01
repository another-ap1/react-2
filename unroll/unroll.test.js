const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});

describe("#unroll", function () {
  it("should return number matrix into one array in a spiral pattern", function(){
  expect(unroll([[1,2,3,4],
                 [12,13,14,5],
                 [11,16,15,6],
                 [10,9,8,7]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });
})

describe("#unroll", function () {
  it("should return letter matrix into one array in a spiral pattern", function(){
  expect(unroll([["a", "b", "c"],
                 ["d", "e", "f"],
                 ["g", "h", "i"]])).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });
})
