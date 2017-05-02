// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
    var current = this;
    var property = string.split('.');

    while (current && property.length) {
        current = current[property.shift()];
    }

    return current;
}
