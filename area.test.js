const area = require("./area");

test("returns rectangle area with sides 2 and 3 = 6", function(){expect(area.getArea([2,3])).toBe(6)});
test("returns -1 because one of the array values is a negative integer", function(){expect(area.getArea([-2,3])).toBe(-1)});
test("returns -1 because one of the array values is not an integer", function(){expect(area.getArea({x:2,y:3})).toBe(-1)});
test("returns -1 because nothing is given as input", function(){expect(area.getArea()).toBe(-1)});