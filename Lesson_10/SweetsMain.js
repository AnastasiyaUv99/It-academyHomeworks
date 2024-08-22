class Sweets {
    constructor(name, type, weight, calories) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.calories = calories;
    }
    getCaloriesOfThisSweet() {
        return (this.weight * this.calories)/100;
    }
}

module.exports = { Sweets }