const { Base } = require('./base');

class MainPage extends Base {
  constructor(page) {
    super(page);
  }

  get mainPageUrl() {
    return 'https://oz.by/';
  }
}

module.exports = MainPage;
