const XO = require('./index');

test('1111', () => expect(XO('xo')).toBe(true));
test('2222', () => expect(XO('xxOo')).toBe(true));
test('3333', () => expect(XO('xxxm')).toBe(false));
test('4444', () => expect(XO('Oo')).toBe(false));
test('5555', () => expect(XO('ooom')).toBe(false));


