var number = function(digit) {
    return function(operator) {
        return operator ? operator(digit) : digit;
    }
};
var zero = number(0),
    one = number(1),
    two = number(2),
    three = number(3),
    four = number(4),
    five = number(5),
    six = number(6),
    seven = number(7),
    eight = number(8),
    nine = number(9);

function plus(rightval) {
    return function(leftval) {
        return leftval + rightval;
    };
}

function minus(rightval) {
    return function(leftval) {
        return leftval - rightval;
    };
}

function times(rightval) {
    return function(leftval) {
        return leftval * rightval;
    };
}

function dividedBy(rightval) {
    return function(leftval) {
        return leftval / rightval;
    };
}
