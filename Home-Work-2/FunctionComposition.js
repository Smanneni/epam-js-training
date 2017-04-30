function compose(f, g) {
    return function(step, ...rest) {
        var g1 = g(step, ...rest);
        var f1 = f(g1);
        return f1;
    };
}
