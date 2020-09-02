function Animal(name) {
    this.name = name;
    console.log(this.name);
}

Animal.prototype.eat = function () {
    console.log(this.name + ' is eating.');
};

function Cat(name) {
    this.name = name;
    Animal.call(this, name);
}

function Surrogate() { }
Surrogate.prototype = Animal.prototype;
Cat.prototype = new Surrogate();
Cat.prototype.constructor = Cat;

const newAnimal = new Animal("Bob");

module.exports = { Animal: Animal, Cat: Cat, newAnimal: newAnimal };