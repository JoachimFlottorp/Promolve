import index from '../index.js';

test('Add', () => {
	const a = 1;
	const b = 1;

	expect(index.add(a, b)).toBe(2);
});
