const { Candy } = require('./Candy')
const { Chocolate } = require('./Chocolate')
const { Jelly } = require('./Jelly')
const { GiftBuilder } = require('./Gift')

Bonpari = new Candy('Bonpari', 'candy', 100, 370, 'apple');
Dushes = new Candy('Dushes', 'candy', 150, 210, 'pear');
Rondo = new Candy('Rondo', 'candy', 60, 140, 'mint');

Alenka = new Chocolate('Alenka', 'сhocolate', 300, 550, 25, true);
Romashka = new Chocolate('Romashka', 'сhocolate', 600, 480, 28, false);
Kofeinaya = new Chocolate('Kofeinaya', 'сhocolate', 450, 537, 80, false);

Marmilan = new Jelly('Marmilan', 'jelly', 350, 330, 'round');
Phelka = new Jelly('Phelka', 'jelly', 240, 430, 'oval');
Gummi = new Jelly('Gummi', 'jelly', 190, 387, 'bear');

let assorti = new GiftBuilder().addSweet(Kofeinaya).addSweet(Bonpari).addSweet(Marmilan).addSweet(Phelka).addSweet(Rondo).build();
let giftBox = new GiftBuilder().addSweet(Alenka).addSweet(Romashka).addSweet(Gummi).addSweet(Kofeinaya).addSweet(Dushes).build();



// console.log(JSON.stringify(assorti, null, 1))

assorti.sortedSweets = "calories"
console.log(JSON.stringify(assorti.sortedSweets, null, 4))

// console.log(assorti.getSweetByParametrs(minWeight = 100, maxWeight = 450, minCalories = 370, maxCalories = 430))









































// class GiftBuilder {
//     constructor() {
//       this.gift = new Gift();
//     }
//     addSweet(sweet) {
//       this.gift.addSweet(sweet);
//     }
//     getGift() {
//       return this.gift;
//     }
//   }

//   const builder = new GiftBuilder();
//   builder.addSweet(Bonpari);
//   builder.addSweet(Romashka);
//   builder.addSweet(Gummi )
