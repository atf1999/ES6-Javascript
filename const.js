//const keyword does the same as let, but makes it immutable
//Defining a const var witht the same name in the same scope again throws an error

const x = 12;

const x = 13;  //Throws an error as x was already available

if(true){
  //a constant x is available in this scope but not defined in this scope so the next line will not throw an error
  
 const x = 13;
 
 const y = 11; //y is available inside this scope not outside
}

const y = 12; //will not throw error because it is available in this scope(i.e. global scope)
