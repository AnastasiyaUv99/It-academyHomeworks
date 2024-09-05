const { Base } = require('../base');

class Header extends Base {
  constructor() {
    super();
  }

  get loginButton() {
    return $('[href="/personal/login.phtml?back_uri=https%3A%2F%2Foz.by%2F"]');
  }

  get searchField() {
    return $('#top-s');
  }

  get successSearchText() {
    return $('body .digi-products__quantity');
  }

  get unsuccessSearchText() {
    return $('.digi-title-empty__wrapper');
  }

  async searching(item, condition) {
    await this.searchField.setValue(item);
    await browser.keys('Enter');
    await browser.waitUntil(async () => (await condition.isDisplayed()), {
      timeout: 10000,
    });
  }
}

module.exports = Header;
