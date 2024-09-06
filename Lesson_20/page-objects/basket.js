const { Base } = require('./base');

class Basket extends Base {
  constructor(page) {
    super(page);
  }

  get basketUrl() {
    return 'https://oz.by/checkout/#';
  }

  get basketButton() {
    return this.page.locator('.link.user-bar__item.user-bar__cart');
  }

  get itemsInBasket() {
    return this.page.locator('div.goods-table-cell__link');
  }

  get selectAllButton() {
    return this.page.locator('span.i-checkbox__faux:last-child');
  }

  get deleteButton() {
    return this.page.locator('.i-button.i-button_danger.i-button_small.remove');
  }
  get confirmDeletingButton() {
    return this.page.locator('.i-button.i-button_danger.i-button_small.remove-yes');
  }

  get emptyBasketMessage() {
    return this.page.locator('div.i-textual.i-textual_bordered>div.i-textual__plain.i-textual__plain_limited');
  }


  async addToBasket(numberOfItem) {  
    const itemSelector = this.page.locator(`.products__item.item.product-card:nth-of-type(${numberOfItem})>div.product-card__footer>[data-controller="add-to-cart"]>[type="submit"]`);
    await itemSelector.scrollIntoView()
    const nameSelector = this.page.locator(`.products__item.item.product-card:nth-of-type(${numberOfItem})>div.product-card__body>.product-card__title`);
    const productName = nameSelector.innerText();
    await this.pressElement(itemSelector);
    return productName;
  }

  async isItemInBasket(productName) {
    await this.navigate(this.basketUrl);
    const items = await this.itemsInBasket;

    const count = await items.count();
    for (let i = 0; i < count; i++) {
        const text = await items.nth(i).innerText();
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
