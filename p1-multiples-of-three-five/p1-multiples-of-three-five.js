/*
	ok we want to return sum of multiples of -3- and -5- from 1-1000.  So I see three arguments here
	plus a main function. but we do not need any classes. we can do pure functions.
*/

module.exports = {
	main(){
		console.log(this.calculate(3,5,1000));
	},
	calculate(first_div, second_div, big_num) {
		function sumall(n){
			return n*(n+1) /2 ; 
		}
		--big_num;
		return first_div * sumall(Math.trunc(big_num/first_div)) 
			+ second_div* sumall(Math.trunc(big_num/second_div))
			- first_div * second_div* sumall(Math.trunc(big_num/second_div/first_div));
	}
}