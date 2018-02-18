const p1 = require('./p1-multiples-of-three-five');
beforeEach(()=> {jest.resetAllMocks();}) ;

describe('main function', () => {
	test('it should call the calculate function with arguments 3,5,1000 and log the results', () => {
		p1.calculate = jest.fn()
			.mockReturnValueOnce(-1); 
		console.log = jest.fn(); 

		p1.main(); 

		expect(p1.calculate).toBeCalledWith(3,5,1000); 
		expect(console.log).toBeCalledWith(-1); 
	});
});

describe('calculate function', () => {
	test('it should return some correct values.', () => {
		expect(p1.calculate(3,5,1000)).toBe(233168);
	});
});