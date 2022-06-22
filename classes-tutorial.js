console.log("Hello")


class Rectangle {
    //constructor is run when object is created, only once, can accept parameters
    constructor (_width, _height, _color) {
        //constructor is used to setup your object

        console.log("Rectangle is being created!")

        //instance properties, this refers to current object
        this.width = _width;
        this.height = _height;
        this.color = _color
    }


    //defining instance methods below constructor
    getArea () {
        return this.width * this.height
    }

    printDescription () {
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`)
    }
}


let myRectangleOne = new Rectangle(5, 3, "blue") 
let myRectangleTwo = new Rectangle(10, 5, "red")

console.log(myRectangleOne.getArea())
console.log(myRectangleTwo.getArea())

myRectangleOne.printDescription()




//Getters and Setters Lesson

//they look like properties but are methods of a class

class Square {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
        this.numOfRequestsForArea = 0;
    }

    //getter
    get area () {
        this.numOfRequestsForArea++;
        return this.width * this.height
    }

    set area (area) {
        this.width = Math.sqrt(area)
        this.height = this.width
    }


    //setter, can assign new values to instance properties
}

let mySquareOne = new Square(4)
mySquareOne.area = 25
console.log(mySquareOne.area);
console.log(mySquareOne.area);
console.log(mySquareOne.area);
console.log(mySquareOne.area);

console.log(mySquareOne.numOfRequestsForArea)




