
class Person {
    constructor (_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe () {
        console.log(`I am ${this.name} and I am ${this.age}  old.`)
    }
}

class Programer extends Person {
    constructor (_name, _age, _yearsOfExperience) {
        // super calls Person
        super(_name, _age)

        //Custom biheviour
        this.yearsOfExperience = _yearsOfExperience
    }


    code () {
        console.log(`${this.name} is coding.`)
    }
}

/* let person = new Person("Jeff", 45)
let programmer = new Programer("Dom", 32, 12) */
/* programmer.describe()
console.log(person)
console.log(programmer) */

const programmers = [
    new Programer("Jeff", 54, 12),
    new Programer("Dom", 22, 2),
    new Programer("Nico", 14, 2)

]


function developSoftware (programmers) {
    //develop software
    for(programer of programmers) {
        programer.code()
    }
}


developSoftware(programmers)