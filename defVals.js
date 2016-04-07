function def(x = 1, y = 2, z = 3){
   console.log(x, y, z);
}
function expr(x = 1, y = 2, z = 3+5){
   console.log(x, y, z); 
}
def(6,7); //Outputs "6 7 3" as z got no value so the default is 3

def(undefined,7,9); //Outputs "1 7 9" as undefined is considered a missing argument

expr(6,7) //Ouputs "6 7 8"
