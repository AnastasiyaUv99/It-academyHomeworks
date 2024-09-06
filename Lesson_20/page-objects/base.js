class Base {

  constructor(page) {
    this.page = page
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async pressElement(webElement) {
    await webElement.click();
  }

}

module.exports = { Base };
