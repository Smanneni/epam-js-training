var number = function(digit) {
    return function(operator) {
        return operator ? operator(digit) : digit;
    }
};
var zero = number(0);
var one = number(1);
var two = number(2);
var three = number(3);
var four = number(4);
var five = number(5);
var six = number(6);
var seven = number(7);
var eight = number(8);
var nine = number(9);

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
