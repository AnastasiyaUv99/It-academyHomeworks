class Base {
  async navigate(url) {
    await browser.url(url);
  }

  async pressElement(WebElement, timeout = 10000) {
    await WebElement.waitForClickable({
      timeout,
      timeoutMsg: `Element ${WebElement.selector} is not clickable after ${timeout}`,
    });
    await WebElement.click();
  }
}

module.exports = { Base };
