const { Sweets } = require('./SweetsMain')

class Jelly extends Sweets {
    constructor(name, type, weight, calories, shape) {
        super(name, type, weight, calories);
        this.shape = shape;
    }
}

module.exports = { Jelly }