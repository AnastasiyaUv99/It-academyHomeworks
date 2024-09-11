const { Base } = require('../base');

class Header extends Base {
  constructor() {
    super();
  }

  get loginButton() {
    return cy.get('[href="/personal/login.phtml?back_uri=https%3A%2F%2Foz.by%2F"]');
  }

  get searchField() {
    return cy.get('#top-s');
  }

  get successSearchText() {
    return '.landing-header__title';
  }

  get unsuccessSearchText() {
    return 'body .digi-title-alternative__wrapper';
  }

  async searching(item) {
    await this.searchField.type(`${item}{enter}`, { delay: 200 });
  }
}

module.exports = Header;
