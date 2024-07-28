class Gift {
    constructor() {
      this.sweets = [];
      this.weight = 0;
      this.calories = 0;
      this.minWeight = 0;
      this.maxWeight = 0;
      this.minCalories = 0;
      this.maxCalories = 0;
    }
   setCalories() {
      for (let i in this.sweets) {
        this.calories += this.sweets[i].getCaloriesOfThisSweet();
      }
    }
    getSweetsName() {
      let sweetNames = ''
      for (let i in this.sweets) {
        sweetNames += this.sweets[i].name + ', ';
      }
      return sweetNames.slice(0, -2);
    }
    set sortedSweets(sortProperty) {
      this.sweets = (sortProperty ? this.sweets.sort((a,b) => a[sortProperty] - b[sortProperty]) : this.sweets.sort((a,b) => a.name - b.name));
    }
    get sortedSweets() {
      return this.sweets;
    }
    setWeightAndCalorieLimits() {
      this.sortedSweets = 'weight';
      this.minWeight = this.sortedSweets[0].weight;
      this.maxWeight = this.sortedSweets[this.sweets.length-1].weight;
      this.sortedSweets = 'calories';
      this.minCalories = this.sortedSweets[0].calories;
      this.maxCalories = this.sortedSweets[this.sweets.length-1].calories;
    }
    getSweetByParametrs(minWeight = this.minWeight, maxWeight = this.maxWeight, minCalories = this.minCalories, maxCalories = this.maxCalories) {
      let matchingSweets = '';
      for (let i in this.sweets) {
        if (this.sweets[i].weight >= minWeight && 
            this.sweets[i].weight <= maxWeight && 
            this.sweets[i].calories >= minCalories && 
            this.sweets[i].calories <= maxCalories ) {
              matchingSweets += this.sweets[i].type + ': ' + this.sweets[i].name + '\n';
        } 
      }
      return matchingSweets;
    }
}


class GiftBuilder {
    constructor() {
        this.gift = new Gift();
    }
    addSweet(sweet) {
        this.gift.sweets.push(sweet);
        this.gift.weight += sweet.weight;
        return this;
    }
    build() {
      this.gift.setWeightAndCalorieLimits();
      this.gift.setCalories();
      return this.gift;
    }
}

module.exports = { GiftBuilder }