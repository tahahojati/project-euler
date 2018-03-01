


describe('recursive_generator', () => {
	let fn1 = jest.fn(() => 2) ;
	let fn2 = jest.fn((arg1, arg2) => arg1 - arg2);
	test('fn1, no args', () => {
		let foo = recursive_generator({fn: fn1});
		

	});
});