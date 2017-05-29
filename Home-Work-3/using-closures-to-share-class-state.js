var Cat = (function() {

    var totalWeight = 0,
        countInstances = 0;

    function Cat(name, weight) {
        if (arguments.length < 2) {
            throw new Error('Both name and weight sould be specified.');
        }
        this.name = name;
        Object.defineProperty(this, 'weight', {
            get: function() {
                return weight;
            },
            set: function(wi) {
                totalWeight -= (weight - wi);
                weight = wi;
            }
        });
        totalWeight += weight;
        countInstances += 1;
    }

    Cat.averageWeight = function() {
        return totalWeight / countInstances;
    };

    return Cat;

}());
