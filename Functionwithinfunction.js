function always(n) {

    var b = function b() {
        return n;
    }

    return b;
}
var s = always(true);
s();

function always(n) {

    function b() {
        return n;
    }

    return b();
}
var s = always(true);
s;

function magic(x) {
    return function calc(x) {
        return x;
    };
}
