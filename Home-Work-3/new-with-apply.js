function construct(Class, ...arg) {
    var newOb = Object.create(Class.prototype);
    Class.apply(newOb, arg);
    return newOb;
}
