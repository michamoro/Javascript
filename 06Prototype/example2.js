class Animal {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
}

var perro = new Animal('mike', 'azul');
console.log(perro.nombre);
var gato = new Animal('michi', 'negro');
console.log(gato.nombre);

// this method only works for the perro
perro.saludo = () => {
    return 'Hola, mi nombre es: ' + perro.nombre;
}
console.log(perro.saludo());
//console.log(gato.saludo()); TypeError: gato.saludo is not a function

Animal.prototype.saludar = (nombre) => {
    return 'Hola, mi nombre es '.concat(nombre);
}

// Prototype
console.log('Saludar prototipo', perro.saludar(perro.nombre));
console.log('Saludar prototipo', gato.saludar(gato.nombre));

Animal.prototype.edad;
perro.edad = 5;
gato.edad = 8;
console.log('Perro:', perro.edad);
console.log('Gato:', gato.edad);

