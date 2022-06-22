

//static method does not require instance of class to be created in order to be used, most are helper methods

class Square {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
    }

    //static method

    static equals (a, b) {
        //no instance bonded to this method
        return a.width * a.height === b.height * b.width
    }

    static isValidDimension (width, height) {
        return width === height;
    }
}

let squareOne = new Square(8)
let squareTwo= new Square(8)

console.log(Square.equals(squareOne, squareTwo))
console.log(Square.isValidDimension(6, 6))
