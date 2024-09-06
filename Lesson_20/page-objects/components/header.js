const { Base } = require('../base');

class Header extends Base {
  constructor(page) {
    super(page);
  }

  get loginButton() {
    return this.page.locator('[href="/personal/login.phtml?back_uri=https%3A%2F%2Foz.by%2F"]');
  }

  get searchField() {
    return this.page.locator('#top-s');
  }

  get successSearchText() {
    return this.page.locator('.landing-header__title');
  }

  get unsuccessSearchText() {
    return this.page.locator('.digi-title-empty__wrapper');
  }

  async searching(item, condition) {
    await this.searchField.fill(item);
    await this.searchField.press('Enter');
    await condition.waitFor({ state: 'visible' })
  }
}

module.exports = Header;
