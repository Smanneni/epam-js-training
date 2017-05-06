Array.prototype.square = Square;
Array.prototype.cube = Cube;
Array.prototype.average = Average;
Array.prototype.sum = Sum;
Array.prototype.even = Even;
Array.prototype.odd = Odd;

function Square() {
    return this.map(function(num) {
        return num * num;
    });
}

function Cube() {
    return this.map(function(num) {
        return num * num * num;
    });
}

function Average() {
    return this.sum() / this.length;
}

function Sum() {
    return (this == '') ? 0 : this.reduce(function(a, b) {
        return a + b;
    });
}

function Even() {
    return this.filter(function(num) {
        return num % 2 == 0;
    });
}

function Odd() {
    return this.filter(function(num) {
        return num % 2 != 0;
    });
}
