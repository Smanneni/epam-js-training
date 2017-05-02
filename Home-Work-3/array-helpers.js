Array.prototype.square = function() {
    var retval = [];
    for (var i = 0, len = this.length; i < len; ++i) {
        retval.push(this[i] * this[i]);
    }
    return retval;
};

Array.prototype.cube = function() {
    var retval = [];
    for (var i = 0, len = this.length; i < len; ++i) {
        retval.push(this[i] * this[i] * this[i]);
    }
    return retval;
};

Array.prototype.average = function() {
    var retval = NaN;
    for (var i = 0, len = this.length; i < len; ++i) {
        if (isNaN(retval)) {
            retval = 0;
        }
        retval += this[i];
    }
    return retval / this.length;
};

Array.prototype.sum = function() {
    var retval = 0;
    for (var i = 0, len = this.length; i < len; ++i) {
        retval += this[i];
    }
    return retval;
};

Array.prototype.even = function() {
    var retval = [];
    for (var i = 0, len = this.length; i < len; ++i) {
        if (this[i] % 2 == 0) {
            retval.push(this[i]);
        }
    }
    return retval;
};

Array.prototype.odd = function() {
    var retval = [];
    for (var i = 0, len = this.length; i < len; ++i) {
        if (this[i] % 2 == 1) {
            retval.push(this[i]);
        }
    }
    return retval;
};
