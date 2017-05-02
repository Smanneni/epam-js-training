Array.prototype.square = function() {
    var retVal = [];
    for (var i = 0, len = this.length; i < len; ++i) {
        retVal.push(this[i] * this[i]);
    }
    return retVal;
};

Array.prototype.cube = function() {
    var retVal = [];
    for (var i = 0, len = this.length; i < len; ++i) {
        retVal.push(this[i] * this[i] * this[i]);
    }
    return retVal;
};

Array.prototype.average = function() {
    var retVal = NaN;
    for (var i = 0, len = this.length; i < len; ++i) {
        if (isNaN(retval)) {
            retVal = 0;
        }
        retVal += this[i];
    }
    return retVal / this.length;
};

Array.prototype.sum = function() {
    var retVal = 0;
    for (var i = 0, len = this.length; i < len; ++i) {
        retVal += this[i];
    }
    return retVal;
};

Array.prototype.even = function() {
    var retVal = [];
    for (var i = 0, len = this.length; i < len; ++i) {
        if (this[i] % 2 == 0) {
            retVal.push(this[i]);
        }
    }
    return retVal;
};

Array.prototype.odd = function() {
    var retVal = [];
    for (var i = 0, len = this.length; i < len; ++i) {
        if (this[i] % 2 == 1) {
            retVal.push(this[i]);
        }
    }
    return retVal;
};
