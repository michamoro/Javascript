// strict mode always
class Ejemplo {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
}

// anonymous
let anonimus = class {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
}

// defined methods - Get and Set
class foo {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set name(x) {
        this.name = x;
    }
    // method
    sayName() {
        console.log(this.name);
    }

    // use this without an instance
    static seiNeimWherever() {
        console.log(this.name);
    }

}

// extends sub-class
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(this.nombre + ' hace un ruido');
    }
}

class Perro extends Animal {
    hablar() {
        console.log(this.nombre + ' ladra');
    }
}

// super
class Gato {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(this.nombre + ' hace ruido.');
    }
}

class Leon extends Gato {
    hablar() {
        super.hablar();
        console.log(this.nombre + ' maulla.');
    }
}

// mix-ins (multi Inheritance)
var nombre = Base => class extends Base {
    sayName() {
        console.log('name');
    }
};

var telefono = Fu => class extends Fu {
    sayPhone() {
        console.log('phone');
    }
};

class Foo { }
class Persona extends nombre(telefono(Foo)) {
    toStringTest() {
        super.sayName();
        super.sayPhone();
    }
}

let persona = new Persona();
console.log(persona.toStringTest());
