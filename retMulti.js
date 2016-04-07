function data(){
	return [1,6,7,4,8,0];  //Storing values into the array and then returning it
}
var q, w, e, r, t, y;

//Here we are using ES6's array destructuring feature to assign the return values to the variables.  Here we are ignoring 2 and 4 array indexes
[q,w,,r,,y] = data();

alert(y);//y is 0