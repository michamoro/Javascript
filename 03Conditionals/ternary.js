var isMember;
var a = "La Cuota es de:  " + (isMember ? "$2.00" : "$10.00")
var elvisLives = Math.PI > 4 ? "Sip" : "Nop";

// nested
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

var b = typeof(a) === 'string' ? 'a is a string' : 'no, its not';

const MY_MOMMENT = Date.now() < 1596147211062 ? 'DAY' : 'AFTERNOON';

// more than one
// the last block after comma is the setted
let age = 16;
let permission = age > 18 ?
                  (console.log('Puedes continuar'), true) 
                : (console.log('Sorry bro'),console.log('No puedes continuar'), false);
  
console.log(a);
console.log(elvisLives);
console.log(b);
console.log(access);
console.log(MY_MOMMENT);
console.log(permission);