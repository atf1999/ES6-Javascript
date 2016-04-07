/*Let key word allows for block scope(bracket scope) variables in JS
 *Intially Javascript only supported function and global scope
 *closer to OOP languages standards*/

if(true){
  let x = 12;
  alert(x); //alerts 12
}
alert(x);//x is now undefined