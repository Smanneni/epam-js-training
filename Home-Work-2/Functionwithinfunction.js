function always(n) {

    var b = function b() {
        return n;
    }

    return b;
}
var s = always(true);
s();


