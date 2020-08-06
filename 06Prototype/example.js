class Persona {
    constructor(edad, nombre, genero) {
        this.edad = edad;
        this.nombre = nombre;
        this.genero = genero;
    }
}

var hombre = Object.create(Persona);
var mujer = new Persona(18, 'Maria', 'Femenino');

console.log('Persona', Persona.prototype);
console.log('Hombre', hombre.prototype);
console.log('Mujer', mujer.prototype);

/***********************************/
// stackoverflow
// ECMAScript 5
// Para crear una clase:
function Polygon(height, width) {
    this.height = height;
    this.width = width;
}
// Para heredar sobre una clase base:
function Square(side) {
    this.prototype = Object.create(Polygon.prototype);
    Polygon.call(this, side, side); //super

    this.getArea = function () {
        return this.height * this.width;
    }
}

// ECMAScript 6
// Para crear una clase:
class Polygon2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
// Para heredar de una clase base:
class Square2 extends Polygon2 {
    constructor(side) {
        super(side, side);
    }
    getArea() {
        return this.height * this.width;
    }
}
// Ya con esto podemos crear una instancia con:
var square = new Square(5);
// debe imprimir 25
console.log(square.getArea());