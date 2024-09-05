const { Base } = require('./base');

class Basket extends Base {
  constructor() {
    super();
  }

  get basketUrl() {
    return 'https://oz.by/checkout/#';
  }

  get basketButton() {
    return $('.link.user-bar__item.user-bar__cart');
  }

  get itemsInBasket() {
    return $$('div.goods-table-cell__link');
  }

  get selectAllButton() {
    return $('span.i-checkbox__faux:last-child');
  }

  get deleteButton() {
    return $('.i-button.i-button_danger.i-button_small.remove');
  }
  get confirmDeletingButton() {
    return $('.i-button.i-button_danger.i-button_small.remove-yes');
  }

  get emptyBasketMessage() {
    return $('div.i-textual.i-textual_bordered>div.i-textual__plain.i-textual__plain_limited');
  }

  async addToBasket(numberOfItem) {
    const itemSelector = $(`.digi-product:nth-of-type(${numberOfItem})>div.digi-product__main>div.digi-product__actions>button`);
    const nameSelector = $(`.digi-product:nth-of-type(${numberOfItem})>div.digi-product__main>div.digi-product__meta`);
    const productName = nameSelector.getText();
    await this.pressElement(itemSelector);
    return productName;
  }

  async isItemInBasket(productName) {
    await this.navigate(this.basketUrl);
    const items = await this.itemsInBasket;

    for (const item of items) {
      const text = await item.getText();
      if (text.includes(productName)) {
        return true;
      }
    }
    return false;
  }

  async deleteAllFromBasket() {
    await this.pressElement(this.selectAllButton);
    await this.pressElement(this.deleteButton);
    await this.pressElement(this.confirmDeletingButton);
  }
}

module.exports = Basket;

// https://oz.by/?digiSearch=true&term=%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D1%8C&params=%7Csort%3DDEFAULT
