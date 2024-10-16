

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dollar should be 146.26 Yen", function(){
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBe(146.26);
})
test ("100 Yen sholud bu 0.56 Pound", function(){
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(100);
    const expected = (100 / 156.5) * 0.87;
    expect(fromYenToPound(100)).toBe(0.56);
})