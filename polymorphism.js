

/* Polymorphism is an act of redefining a method inside of a derived child class of a parent */


class Animal {
    constructor (_name) {
        this.name = _name;
    }

    makeSound () {
        console.log("Generic animal sound!!!")
    }
}

class Dog extends Animal {
    constructor(_name) {
        super(_name)
    }

    makeSound() {
        super.makeSound()
        console.log("Woof woof")
    }
}


const a1 = new Animal("Dom")
a1.makeSound()

const a2 = new Dog("Jeff")
a2.makeSound()