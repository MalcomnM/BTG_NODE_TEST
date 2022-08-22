const nextPrime = require('./index');


test('Test_001', () => expect(nextPrime(0)).toBe(2));
test('Test_002', () => expect(nextPrime(1)).toBe(2));
test('Test_003', () => expect(nextPrime(2)).toBe(3));
test('Test_004', () => expect(nextPrime(3)).toBe(5));
test('Test_005', () => expect(nextPrime(5)).toBe(7));
test('Test_006', () => expect(nextPrime(11)).toBe(13));
test('Test_007', () => expect(nextPrime(17)).toBe(19));
test('Test_008', () => expect(nextPrime(2971)).toBe(2999));
test('Test_009', () => expect(nextPrime(9992971)).toBe(9993019));
test('Test_010', () => expect(nextPrime(99992971)).toBe(99992993));
test('Test_011', () => expect(nextPrime(999297991)).toBe(999298009));


