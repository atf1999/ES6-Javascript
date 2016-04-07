//args variable is an array holding the passed function arguments
function test(...args){
	console.log(args);
	console.log(args.length);
}
function test2(a, b, ...args){
	console.log(args);
	console.log(args.length);
}
function arraySpread(a, b){
	console.log(a+b);
}
test(1,4);
test(1,4,7);
test(1,4,7,0);

//args holds only 7 and 9
test2(1,5,7,9);

var array = [1,4];