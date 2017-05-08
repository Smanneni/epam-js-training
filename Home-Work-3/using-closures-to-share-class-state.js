var Cat = (function() {

    var totalWeight = 0;
    var countInstances = 0;

    function Cat(name, weight) {
        this.name = name;
        Object.defineProperty(this, 'weight', {
            get: function() {
                return weight;
            },
            set: function(w) {
                totalWeight -= weight - w;
                weight = w;
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
