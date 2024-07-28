const { Sweets } = require('./SweetsMain')

class Candy extends Sweets {
    constructor(name, type, weight, calories, taste) {
        super(name, type, weight, calories);
        this.taste = taste;
    }
}

module.exports = { Candy }