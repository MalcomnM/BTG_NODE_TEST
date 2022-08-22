const likes = require('./index');


test('Test_001', () => expect(likes([])).toBe('no one likes this'));
test('Test_002', () => expect(likes(['Peter'])).toBe('Peter likes this'));
test('Test_003', () => expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this'));
test('Test_004', () => expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this'));
test('Test_005', () => expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this'));