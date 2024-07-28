const { Sweets } = require('./SweetsMain')

class Chocolate extends Sweets {
    constructor(name, type, weight, calories, cacao, nuts) {
        super(name, type, weight, calories);
        this.cacao = cacao;
        this.nuts = nuts;
        this.typeOfChocolate = this.typeOfChocolate();
    }
    typeOfChocolate() {
        if (this.cacao >= 50) {
            return 'Dark';
        } else if (this.cacao >= 25 && this.cacao < 50) {
            return 'Milk';
        } else  if (this.cacao < 25) {
            return 'White';
        } 
    }
}

module.exports = { Chocolate }